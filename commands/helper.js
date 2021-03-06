module.exports.shuffle = function(arra1) {
	let ctr = arra1.length, temp, index;
	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
};

module.exports.get_url_extension = function(url) {
	return url.split(/\#|\?/)[0].split('.').pop().trim();
};

module.exports.baseEmbedTemplate = function() {
	const ftitle = 'The Wheelhaus';
	const furl = 'thewheelhaus.com';
	const inlineurl = 'https://www.patreon.com/f00ddevelops';
	const inlineText = 'Support this Bot and other works over at Patreon';
	return [ftitle, furl, inlineurl, inlineText];
};
