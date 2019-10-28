const request = require('request');
const testClass = require('../commands/helper.js');
module.exports = {
	name: 'listtags',
	description: 'List of all Tags',
	usage: 'List of all Available Tags',
	cooldown: 5,
	execute(message) {
		function sortByName(array) {
			return array.sort(function(a, b) {
				const x = a['name']; const y = b['name'];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		}
		const wheelhausRandom = 'https://steam.cma.dk/tags';
		request(wheelhausRandom, function(err, response, body) {
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
				const listtags = JSON.stringify(tagsName);
				const regexTags = listtags.replace(/^\[|\]$/, '').split(',').join(', ');
				const regexTagsStripQuotations = regexTags.replace(/"([^"]+(?="))"/g, '$1');
				const regexString = JSON.stringify(regexTagsStripQuotations);
				console.log(regexString);
				const wheelHausMessage = 'List of all Tags';
				const wheelHausMessageDesc = `${regexString.slice(0, 2010)}` + '\n' + 'Follow the link above to see more!';
				const wheelHausURL = 'https://steamdb.info/tags/';
				const embed = {
					'title': `${wheelHausMessage}`,
					'color': 16679428,
					'description': `${wheelHausMessageDesc}`,
					'url': `${wheelHausURL}`,
					'fields': [
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
			}
		});
	},
};
