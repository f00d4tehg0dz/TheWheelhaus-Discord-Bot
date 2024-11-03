const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

async function fetchRandomGame() {
  const { default: fetch } = await import('node-fetch');
  const url = 'https://steam.cma.dk/apps?&format=json';
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
    .setName('shuffle')
    .setDescription('Displays a randomized game from Wheelhaus'),

  async execute(interaction) {
    await interaction.reply('Fetching a random game...');

    try {
      const gamesData = await fetchRandomGame();
      if (!gamesData || gamesData.length === 0) {
        return interaction.editReply('No games found. Please try again later.');
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