import bloom1 from '../images/bloom-1-1x.gif';
import bloom2 from '../images/bloom-2-1x.gif';
import bloom3 from '../images/bloom-3-1x.gif';
import bloom4 from '../images/bloom-4-1x.gif';
import bloom5 from '../images/bloom-5-72px.gif';

// -- Interval --
export const intervalMs = 4000;

// -- Cell Background Images --
export const blooms = [bloom1, bloom2, bloom3, bloom4, bloom5];

// -- DOM Elements --
export const main = document.getElementById('main');
export const canvas = document.getElementById('canvas');
export const audioNature = document.getElementById('audioPlayer');
export const audioFire = document.getElementById('fireAudioPlayer');

// -- Buttons --
export const playButton = document.getElementById('play');
export const clearButton = document.getElementById('clear');
export const soundButton = document.getElementById('sound');

// -- Board State --
export const boardState = {
	width: 18,
	height: 18,
	interval: null,
	cells: {},
	playing: false,
	hasPlayed: false
};
