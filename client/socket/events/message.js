import elements from '../../elements.js';
import sanitizeHTML from '../../util/sanitizeHTML.js';

export default (message) => {
	elements.get('messages').innerHTML += `<div><b>${sanitizeHTML(
		message.nickname
	)}</b>: ${sanitizeHTML(message.message)}</div>`;
};
