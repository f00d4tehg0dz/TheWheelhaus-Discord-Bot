/** @format */

const Command = require('../Structures/Command.js');

const Discord = require('discord.js');

const request = require('request');

const options = {
	url: 'https://steam.cma.dk/tags',
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Accept-Charset': 'utf-8',
		'User-Agent': 'wheelhausDiscordBot',
	},
};

module.exports = new Command({
	name: 'List of Tags',
	description: 'List of all Tags',
	usage: 'List of all Available TagS',
	type: 'BOTH',
	slashCommandOptions: [],
	permission: 'SEND_MESSAGES',
	async run(message) {
		const embed = new Discord.MessageEmbed();
		function sortByName(array) {
			return array.sort(function(a, b) {
				const x = a['name']; const y = b['name'];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		}
		request(options, function(err, response, body) {
			if (err) {
				const error = 'cannot connect to the server';
				message.channel.send(error);
				message.channel.send('No results, check your spelling first');
			}
			else {
				const wheelhausJSON = JSON.parse(body);
				// Sort by Name
				const sortedJson = sortByName(wheelhausJSON);
				// Grab just name
				const tagsName = sortedJson.map(a => a.name);
				const listTags = JSON.stringify(tagsName);
				const regexTags = listTags.replace(/^\[|\]$/, '').split(',').join(', ');
				const regexTagsStripQuotations = regexTags.replace(/"([^"]+(?="))"/g, '$1');
				const regexString = JSON.stringify(regexTagsStripQuotations);
				const wheelHausMessage = 'List of all Tags';
				const wheelHausMessageDesc = `${regexString.slice(0, 2010)}` + '\n' + 'Follow the link above to see more!';
				const wheelHausURL = 'https://steamdb.info/tags/';
				embed
					.setTitle(`${wheelHausMessage}`)
					.setURL(`${wheelHausURL}`)
					.setDescription(
						`${wheelHausMessageDesc}`,
					)
					.setColor(16679428)
					.setTimestamp()
					.setFooter({ text: 'Have questions? Twitter @_ok_adrian' }),
				message.reply({ embeds: [embed] });
			}
		});
	},
});