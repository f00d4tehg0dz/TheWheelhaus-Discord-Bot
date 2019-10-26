const request = require('request');
const testClass = require('../commands/helper.js');
module.exports = {
	name: 'shuffle',
	description: 'Randomized WheelHaus',
	usage: 'Display Randomized Game from Wheelhaus',
	cooldown: 5,
	execute(message) {
		const wheelhausRandom = 'https://steam.cma.dk/apps?limit=8&random=1&category=0&genre=0&free=0&format=json';
		request(wheelhausRandom, function(err, response, body) {
			if (err) {
				const error = 'cannot connect to the server';
				message.channel.send(error);
				message.channel.send('No results, check your spelling first');
			}
			else {
				const wheelhausJSON = JSON.parse(body);
				for (let i = 0; i < wheelhausJSON.length; i++) {
					const wheelHausMessage = `${wheelhausJSON[i].name}` + '\n';
					const wheelHausMessageDesc = `${wheelhausJSON[i].description.replace(/<[^>]*>?/gm, '').slice(0, 300)}` + '\n' + 'Follow this link above to read more';
					const wheelHausURL = `https://store.steampowered.com/app/${wheelhausJSON[i].id}`;
					const wheelhausImage = `${wheelhausJSON[i].image}`;
					const wheelhausPrice = `${wheelhausJSON[i].price}`;
					const embed = {
						'title': `${wheelHausMessage}`,
						'color': 16679428,
						'description': `${wheelHausMessageDesc}`,
						'url': `${wheelHausURL}`,
						'image': {
							'url': `${wheelhausImage}`,
						},
						'thumbnail': {
							'url': `${wheelhausImage}`,
						},
						'fields': [
							{
								'name': 'Price',
								'value': `${wheelhausPrice}`,
							},
							{
								'name': `${testClass.baseEmbedTemplate()[3]}`,
								'value': `${testClass.baseEmbedTemplate()[2]}`,
							},
						],
						'footer': {
							'text': `${testClass.baseEmbedTemplate()[0]}`,
						},
						'author': {
							'name': 'f00d',
						},
					};
					message.channel.send({
						embed,
					});
					break;
				}
			}
		});
	},
};
