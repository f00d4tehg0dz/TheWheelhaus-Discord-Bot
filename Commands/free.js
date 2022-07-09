/** @format */

const Command = require('../Structures/Command.js');

const Discord = require('discord.js');

const request = require('request');

const options = {
	url: 'https://steam.cma.dk/apps?limit=8&random=1&category=0&genre=0&free=1&format=json',
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Accept-Charset': 'utf-8',
		'User-Agent': 'wheelhausDiscordBot',
	},
};

module.exports = new Command({
	name: 'free',
	description: 'Randomized Free Game WheelHaus',
	usage: 'Display Randomized Free Game from Wheelhaus',
	type: 'BOTH',
	slashCommandOptions: [],
	permission: 'SEND_MESSAGES',
	async run(message) {
		const embed = new Discord.MessageEmbed();

		request(options, function(err, response, body) {
			if (err) {
				const error = 'cannot connect to the server';
				message.channel.send(error);
				message.channel.send('No results, check your spelling first');
			}
			else {
				const wheelhausJSON = JSON.parse(body);
				for (let i = 0; i < wheelhausJSON.length; i++) {
					const wheelHausMessage = `${wheelhausJSON[i].name}` + '\n';
					const wheelHausMessageDesc = `${wheelhausJSON[i].description.replace(/<[^>]*>?/gm, '').slice(0, 500)}` + '\n' + 'Follow this link above to read more';
					const wheelHausURL = `https://store.steampowered.com/app/${wheelhausJSON[i].id}`;
					const wheelhausImage = `${wheelhausJSON[i].image}`;
					const wheelhausPrice = `${wheelhausJSON[i].price}`;
					embed
						.setTitle(`${wheelHausMessage}`)
						.setURL(`${wheelHausURL}`)
						.setDescription(
							`${wheelHausMessageDesc}`,
						)
						.setColor(16679428)
						.setThumbnail(`${wheelhausImage}`)
						.setTimestamp()
						.setImage(
							`${wheelhausImage}`,
						)
						.setFooter({ text: 'Have questions? Twitter @_ok_adrian'})
						.addFields (
							{
								name: 'Price: ',
								value: `${wheelhausPrice}`,
							},
						),
					message.reply({ embeds: [embed] });
					break;
				}
			}
		});
	},
});