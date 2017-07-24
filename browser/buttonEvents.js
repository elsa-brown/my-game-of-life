import { audio, soundButton, boardState } from './constants';
import { forEachCell, setNextState, step } from './game';

// Start game play
export const playGame = () => {
	if (!boardState.playing) {
		let nextBoardState = Object.assign({}, boardState.cells)

		forEachCell((cell, row, col) => {
			// console.log('in forEach')
			if (Math.floor((row + col) * Math.random()) % 5 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive'
			}
		})

		setNextState(nextBoardState)

		boardState.playing = true;
	}

	boardState.interval = setInterval(step, 1000)
	console.log('boardState interval ', boardState.interval)

};

// Pause game
export const pauseGame = () => {
	clearInterval(boardState.interval);
	boardState.interval = null;
};

// Clear board
export const clearBoard = () => {
	let nextBoardState = Object.assign({}, boardState.cells);

	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = 'dormant'
	});

	setNextState(nextBoardState);
	boardState.interval = null;
	boardState.playing = false;
};

// Toggle Audio
let soundOn = true;
export const toggleSound = () => {
	if (soundOn) {
		audio.pause();
		soundButton.innerHTML = 'Sound On';
		soundOn = false;
	} else {
		audio.play();
		soundButton.innerHTML = 'Sound Off';
		soundOn = true;
	}
};
