import { audio, intervalMs, fireAudio, playButton, soundButton, boardState } from './constants';
import { forEachCell, setNextState, step } from './game';

// Start game play
export const togglePlay = () => {
	if (!boardState.playing) {
		let nextBoardState = Object.assign({}, boardState.cells)

		forEachCell((cell, row, col) => {
			if (Math.floor((row + col) * Math.random()) % 5 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive'
			}
		})
		setNextState(nextBoardState)

		playButton.innerHTML = 'Pause'
		boardState.playing = true;
		boardState.interval = setInterval(step, intervalMs)
	} else {
		clearInterval(boardState.interval);
		boardState.interval = null;
		playButton.innerHTML = 'Play'
		boardState.playing = false;

	}
};

// Clear board
export const clearBoard = () => {
	let nextBoardState = Object.assign({}, boardState.cells);

	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = 'dormant'
	});

	setNextState(nextBoardState);
	clearInterval(boardState.interval)
	boardState.interval = null;
	boardState.playing = false;
	playButton.innerHTML = 'Play'

	audio.volume = 0.3;
	boardState.firstPlay = false;
};

// Toggle Audio
let soundOn = true;
export const toggleSound = () => {
	if (soundOn) {
		audio.pause();
		fireAudio.pause();
		soundButton.className = 'line-through';
		soundOn = false;
	} else {
		audio.play();
		fireAudio.play();
		soundButton.className = null;
		soundOn = true;
	}
};
