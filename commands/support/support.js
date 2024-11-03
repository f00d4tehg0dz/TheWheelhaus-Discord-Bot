const dotenv = require('dotenv');
dotenv.config();
const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('support')
    .setDescription(`Ask us a question, I promise we won't mind `),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(process.env.embedColor)
      .setTitle(`TheWheelhaus Bot Support Invite`)
      .setDescription(`[Ask a question here](https://discord.gg/93G9EWU45F)`)
    interaction.reply({embeds: [embed]});
  }
};
