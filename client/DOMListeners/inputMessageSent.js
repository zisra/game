import elements from '../elements.js';

export default (event) => {
	if (event.key === 'Enter') {
		elements.get('sendMessage').click();
	}
};
