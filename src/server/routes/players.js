export default (req, res) => {
	const players = req.memory.getPlayers();
	res.json(players);
};
