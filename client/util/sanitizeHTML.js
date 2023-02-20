export default (input) => {
	if (typeof input !== 'string') throw new Error('Input must be a string');
	const map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	};
	return input.replace(/[&<>"']/g, (m) => map[m]);
};
