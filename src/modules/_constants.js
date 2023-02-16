export const intervalMs = 2200;

export const getBloomName = () => {
	const bloomNames = ['bloom1', 'bloom2', 'bloom3', 'bloom4', 'bloom5'];
	const idx = Math.floor(Math.random() * 6);
	return bloomNames[idx];
};

export const buttons = {
	play: document.getElementById('play'),
	clear: document.getElementById('clear'),
	sound: document.getElementById('sound')
};

// -- Audio  --
export const defaultVolNature = 0.2;
export const audio = {
	nature: document.getElementById('audioPlayer'),
	fire: document.getElementById('fireAudioPlayer')
}

// -- Board State --
export const boardState = {
	dimension: window.innerWidth > 414 ? 18 : 12,
	interval: null,
	cells: {},
	playing: false,
	isClear: true
};
