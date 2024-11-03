const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Map dropdown values to actual genre codes
const genreMapping = {
  '1': '50', // Accounting
  '2': '1', // Action
  '3': '25', // Adventure
  '4': '4', // Casual
  '5': '70', // Early Access
  '6': '54', // Education
  '7': '82', // Episodic
  '8': '37', // Free to Play
  '9': '74', // Gore
  '10': '23', // Indie
  '11': '29', // Massively Multiplayer
  '12': '72', // Nudity
  '13': '3', // RPG
  '14': '9', // Racing
  '15': '71', // Sexual Content
  '16': '83', // Short
  '17': '28', // Simulation
  '18': '18', // Sports
  '19': '2', // Strategy
  '20': '84', // Tutorial
  '21': '73', // Violent
};

async function fetchGameByGenre(genreKey) {
  const { default: fetch } = await import('node-fetch');
  const genre = genreMapping[genreKey]; // Convert dropdown key to genre code
  const url = `https://steam.cma.dk/apps?genre=${genre}&free=0&non_vr=0&format=json`;
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
    .setName('genre')
    .setDescription('Search by genre and display a randomized game')
    .addStringOption(option =>
      option
        .setName('genre')
        .setDescription('Specify the Steam genre')
        .setRequired(true)
        .addChoices(
          { name: 'Accounting', value: '1' },
          { name: 'Action', value: '2' },
          { name: 'Adventure', value: '3' },
          { name: 'Casual', value: '4' },
          { name: 'Early Access', value: '5' },
          { name: 'Education', value: '6' },
          { name: 'Episodic', value: '7' },
          { name: 'Free to Play', value: '8' },
          { name: 'Gore', value: '9' },
          { name: 'Indie', value: '10' },
          { name: 'Massively Multiplayer', value: '11' },
          { name: 'Nudity', value: '12' },
          { name: 'RPG', value: '13' },
          { name: 'Racing', value: '14' },
          { name: 'Sexual Content', value: '15' },
          { name: 'Short', value: '16' },
          { name: 'Simulation', value: '17' },
          { name: 'Sports', value: '18' },
          { name: 'Strategy', value: '19' },
          { name: 'Tutorial', value: '20' },
          { name: 'Violent', value: '21' },
        )
    ),
  
  async execute(interaction) {
    const genreKey = interaction.options.getString('genre');

    await interaction.reply('Searching for a game in the genre...');

    try {
      const games = await fetchGameByGenre(genreKey);
      if (!games || games.length === 0) {
        return interaction.editReply('No results found. Please try a different genre.');
      }

      const game = games[0]; // Get the first result
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