// -- DOM Elements --
export const main = document.getElementById('main');
export const canvas = document.getElementById('canvas');
export const audio = document.getElementById('audioPlayer');
export const fireAudio = document.getElementById('fireAudioPlayer');

// -- Buttons --
export const playButton = document.getElementById('play');
export const clearButton = document.getElementById('clear');
export const soundButton = document.getElementById('sound');

// -- Cell Background Images --
export const blooms = ['bloom1', 'bloom2', 'bloom3', 'bloom4', 'bloom5'];

// -- Board Properties --
export const boardState = {
	width: 20,
	height: 20,
	interval: null,
	cells: {},
	playing: false,
	firstPlay: false
};
