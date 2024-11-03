const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

async function fetchFreeGame() {
  const { default: fetch } = await import('node-fetch');
  const options = {
    url: 'https://steam.cma.dk/apps?free=true&non_vr=false&format=json',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'wheelhausDiscordBot',
    },
  };

  try {
    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
    });
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to the server.');
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('free')
    .setDescription('Displays a randomized free game from WheelHaus'),
  
  async execute(interaction) {
    await interaction.reply("Fetching a free game for you...");

    try {
      const wheelhausJSON = await fetchFreeGame();
      if (!wheelhausJSON || wheelhausJSON.length === 0) {
        return interaction.editReply('No results found. Please try again later.');
      }

      const game = wheelhausJSON[0];
      const embed = new EmbedBuilder()
        .setTitle(game.name)
        .setURL(`https://store.steampowered.com/app/${game.id}`)
        .setDescription(`${game.description.replace(/<[^>]*>?/gm, '').slice(0, 500)}\nFollow this link above to read more`)
        .setColor(0xFF4500)
        .setThumbnail(game.image)
        .setImage(game.image)
        .setTimestamp()
        .setFooter({ text: 'Have questions? Twitter @_ok_adrian' })
        .addFields({ name: 'Price', value: game.price || 'Free' });

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.editReply(`An error occurred: ${error.message}`);
    }
  },
};