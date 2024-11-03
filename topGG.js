const dotenvFlow = require('dotenv-flow');
const { Client, Partials, GatewayIntentBits } = require('discord.js');
dotenvFlow.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages], partials: [Partials.Channel] });
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster(process.env.topGG, client) // your discord.js or eris client

// optional
poster.on('posted', (stats) => { // ran when succesfully posted
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})


AutoPoster(process.env.topGG, client)
  .on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
