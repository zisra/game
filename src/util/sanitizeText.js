import fs from 'node:fs';

export default (input) => {
	const profanityData = fs.readFileSync('./src/data/profanity.txt', 'utf-8');
	profanityData.split('\n').forEach((element) => {
		input = input.replaceAll(element, '*'.repeat([...element].length));
	});
	return input;
};
