
export const intervalMs = 2200;

export const getBloomName = () => {
	const bloomNames = ['bloom1', 'bloom2', 'bloom3', 'bloom4', 'bloom5'];
	const idx = Math.floor(Math.random() * 6);
	return bloomNames[idx];
};

// -- Audio Players --
export const audioNature = document.getElementById('audioPlayer');
export const audioFire = document.getElementById('fireAudioPlayer');
export const defaultVolNature = 0.2;

// -- Buttons --
export const playButton = document.getElementById('play');
export const clearButton = document.getElementById('clear');
export const soundButton = document.getElementById('sound');

// -- Board State --
export const boardState = {
	dimension: 18,
	interval: null,
	cells: {},
	playing: false,
	isClear: true
};
