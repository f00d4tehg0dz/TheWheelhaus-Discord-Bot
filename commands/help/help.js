const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all available commands for TheWheelhaus Discord Bot'),

  async execute(interaction) {
    const commands = interaction.client.commands;
    const helpMessage = [
      "Here's a list of all my commands:",
      '\nTo get a free random Steam game, type `/free`',
      '\nTo shuffle and get a random Steam game, type `/shuffle`',
      '\nTo get a list of available tags, type `/listoftags`',
      '\nTo get a genre and shuffle, type `/genre`, enter a genre, and press enter',
      '\nTo get a tag and shuffle, type `/tag`, enter a tag, and press enter',
      '\nTo shuffle by your Steam username, type `/user`, enter a username, and press enter',
      '\nIf you found this Discord bot useful, consider showing your support! [Support link](https://top.gg/bot/539897313691172874)',
    ];

    try {
      await interaction.user.send(helpMessage.join('\n'));
      if (interaction.channel.type !== 'DM') {
        await interaction.reply('I\'ve sent you a DM with all my commands!');
      }
    } catch (error) {
      console.error(`Could not send help DM to ${interaction.user.tag}.\n`, error);
      await interaction.reply('It seems like I can\'t DM you!');
    }
  },
};