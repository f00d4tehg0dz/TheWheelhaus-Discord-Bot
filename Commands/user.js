/** @format */

const Command = require('../Structures/Command.js');

const Discord = require('discord.js');

const request = require('request');

module.exports = new Command({
	name: 'user',
	description: 'Search by User, and Shuffle for Randomized Game',
	usage: 'Display Randomized Game from Wheelhaus User',
	type: 'BOTH',
	slashCommandOptions: [{
		type: 'STRING',
		name: 'user',
		description: 'Tell me the steam username <STEAM NAME>',
		required: true,
	}],
	permission: ' ',
	async run(message, interaction) {
		const embed = new Discord.MessageEmbed();

		try {
			if(!message.member.permissions.has('')) return;
			let args = interaction;
			let query = '';

			// Concatenate string from args array
			for (let i = 0; i < args.length; i++) {
				query = query + args[i];
				if (i < args.length - 1) {
					query = query + ' ';
				}
			}
			const trimmedQuery = query.split(' ').slice(1).join(' ');

			const options = {
				url: `https://steam.cma.dk/apps?limit=8&random=1&category=&genre=&free=0&&non_vr=0&username=${trimmedQuery}&format=json`,
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Accept-Charset': 'utf-8',
					'User-Agent': 'wheelhausDiscordBot',
				},
			};

			const reason = query.split(' ').slice(1).join(' ');
			if (!reason) return message.reply(':x: You forgot to enter what you are smoking!');

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
							.setFooter({ text: 'Have questions? Twitter @_ok_adrian' })
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
		}
		// eslint-disable-next-line no-empty
		catch(error) {}
	},

});
