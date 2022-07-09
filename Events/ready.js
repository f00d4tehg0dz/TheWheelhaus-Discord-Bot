/** @format */

const Event = require('../Structures/Event.js');

const deploy = require('../clientID.js');

module.exports = new Event('ready', client => {
	client.user.setActivity(`with ${client.guilds.cache.size} servers`, {
		type: 'STREAMING',
	});
	deploy.clientID = client.user.id;
	console.log(`Ready! Logged in as ${client.user.tag}`);
});