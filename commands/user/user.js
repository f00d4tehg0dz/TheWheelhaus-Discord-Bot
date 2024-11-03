const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

async function fetchGameByUsername(username) {
  const { default: fetch } = await import('node-fetch');
  const url = `https://steam.cma.dk/apps?free=false&non_vr=false&username=${username}&format=json`;
  const headers = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'wheelhausDiscordBot',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to the server.');
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Search for a game by Steam username and display a randomized result')
    .addStringOption(option =>
      option.setName('username')
        .setDescription('Enter a Steam username')
        .setRequired(true)
    ),

  async execute(interaction) {
    const username = interaction.options.getString('username');
    await interaction.reply(`Searching for games associated with username "${username}"...`);

    try {
      const gamesData = await fetchGameByUsername(username);
      if (!gamesData || gamesData.length === 0) {
        return interaction.editReply('No games found for this username. Please try a different username.');
      }

      const game = gamesData[0];
      const gameName = game.name;
      const gameDesc = game.description.replace(/<[^>]*>?/gm, '').slice(0, 500) + '\nFollow the link above to read more';
      const gameURL = `https://store.steampowered.com/app/${game.id}`;
      const gameImage = game.image;
      const gamePrice = game.price;

      const embed = new EmbedBuilder()
        .setTitle(gameName)
        .setURL(gameURL)
        .setDescription(gameDesc)
        .setColor(0xFF4500)
        .setThumbnail(gameImage)
        .setImage(gameImage)
        .setTimestamp()
        .setFooter({ text: 'Have questions? Twitter @_ok_adrian' })
        .addFields({ name: 'Price:', value: gamePrice });

      await interaction.editReply({ content: '', embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.editReply(`An error occurred: ${error.message}`);
    }
  },
};
