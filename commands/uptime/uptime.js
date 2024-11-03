const dotenv = require('dotenv');
dotenv.config();
const { SlashCommandBuilder } = require('discord.js');

const ms = require('ms');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Get the Bots uptime'),
  async execute(interaction) {
        interaction.reply(`${ms(interaction.client.uptime)}`);
  },
};