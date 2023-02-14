import crypto from 'crypto';

export default (req, res) => {
	const sessionID = crypto.randomBytes(12).toString('hex');

	req.memory.addSession({ sessionID });

	res.send(sessionID);
};
