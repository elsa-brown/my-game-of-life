import { audioNature, audioFire, intervalMs,  playButton, soundButton, boardState } from './constants';
import { forEachCell, setNextState, step } from './game';

// Start game play
export const togglePlay = () => {
	if (!boardState.playing) {
		const nextBoardState = {...boardState.cells};
		// console.log('FIRST: ', boardState.cells);

		for (const cellId in nextBoardState) {
			const coords = cellId.split('-');
			const x = +coords[0];
			const y = +coords[1];

			// const lifeForce = ['3-4', '4-5', '5-5', '5-4', '5-3']

			const lifeForce = Math.floor((x + y) * Math.random()) % 3 === 0;
			// console.log(lifeForce)
			if (lifeForce) {
				nextBoardState[cellId] = 'alive';
			}
		}

		setNextState(nextBoardState);

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

	audioNature.volume = 0.05;
	boardState.firstPlay = false;
};

// Toggle Audio
let soundOn = false;
export const toggleSound = (evt) => {
	if (soundOn) {
		audioNature.pause();
		audioFire.pause();
		soundButton.classList.add('off');
		soundOn = false;
	} else {
		audioNature.play();
		audioFire.play();
		soundButton.classList.remove('off')
		soundOn = true;
	}
};
