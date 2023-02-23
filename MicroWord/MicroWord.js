const fetch = require('node-fetch');

const getMicroWord = async () => {
	const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
		headers: {'X-Api-Key': 'Enter Your Key Here'},
	});

	if (!response.ok) {
		const message = `Error: ${response.status}`;
		throw new Error(message);
	}

	const word = await response.json();
	return word.word;
};

exports.getMicroWord = getMicroWord;
