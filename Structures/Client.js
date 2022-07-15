/** @format */

const Discord = require('discord.js');

const config = require('../Data/config.json');

const intents = new Discord.Intents(32509);

intents.add(Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_INTEGRATIONS, Discord.Intents.FLAGS.GUILD_PRESENCES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS);

const fs = require('fs');

class Client extends Discord.Client {
	constructor() {
		super({ intents });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {
		// Command Handler
		const commandFiles = fs.readdirSync('./Commands')
			.filter(file => file.endsWith('.js'));

		/**
			 * @type {Command[]}
			 */
		const commands = commandFiles.map(file => require(`../Commands/${file}`));

		commands.forEach(cmd => {
			console.log(`Command ${cmd.name} loaded`);
			this.commands.set(cmd.name, cmd);
		});

		const slashCommands = commands
			.filter(cmd => ['BOTH', 'SLASH'].includes(cmd.type))
			.map(cmd => ({
				name: cmd.name.toLowerCase(),
				description: cmd.description,
				permissions: [],
				options: cmd.slashCommandOptions,
				defaultPermission: true,
			}));

		// Event Handler

		this.removeAllListeners();

		fs.readdirSync('./Events')
			.filter(file => file.endsWith('.js'))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(`Event ${event.event} loaded`);
				this.on(event.event, event.run.bind(null, this));
			});

		this.on('ready', async () => {
			const cmds = await this.application.commands.set(slashCommands);

			cmds.forEach(cmd => console.log(`Slash Command ${cmd.name} registered`));

		});
		this.login(token);
	}
}


module.exports = Client;
