export default (error) => {
	if (error.message === 'Invalid session') {
		localStorage.removeItem('sessionID');
		alert('Invalid session ID, please try again');
		location.reload();
	}
};
