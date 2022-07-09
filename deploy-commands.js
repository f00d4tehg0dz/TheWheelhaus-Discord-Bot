const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./Data/config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '882220665564975135';
const guildId = '519344197074026526';

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	}
	catch (error) {
		console.error(error);
	}
})();