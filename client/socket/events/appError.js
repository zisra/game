export default (error) => {
	if (error.message === 'Session already exists') {
		alert('You are already logged in on another tab');
		location.reload();
	}
};
