import { audioNature, audioFire, intervalMs,  playButton, soundButton, boardState, defaultVolNature } from './constants';
import { forEachCell, getCellNextState, setNextState, step } from './game';

// Start/Stop Game
const genesis = (cellId) => {
	const coords = cellId.split('-');
	const x = +coords[0];
	const y = +coords[1];

	const lifeForce = Math.floor((x + y) * Math.random()) % 4 === 0;
	return lifeForce ? 'alive' : 'dormant';
	// if (lifeForce) { nextBoardState[cellId] = 'alive'; }
};

export const togglePlay = () => {

	if (!boardState.playing) {
		const nextBoardState = {...boardState.cells};

		for (const cellId in nextBoardState) {
			if (boardState.isClear) {
				nextBoardState[cellId] = genesis(cellId);
			} else {
				nextBoardState[cellId] = getCellNextState(cellId);
			}
		}

		setNextState(nextBoardState);

		playButton.innerHTML = 'Pause';
		boardState.playing = true;
		boardState.isClear = false;
		boardState.interval = setInterval(step, intervalMs);

	} else {
		clearInterval(boardState.interval);
		
		playButton.innerHTML = 'Play' ;
		boardState.playing = false;
		boardState.interval = null;
	}
};

// Clear Board
export const clearBoard = () => {
	const nextBoardState = {...boardState.cells};
	for (const cellId in nextBoardState) {
		nextBoardState[cellId] = 'dormant';
	}

	setNextState(nextBoardState);
	clearInterval(boardState.interval);

	audioNature.volume = defaultVolNature;
	audioFire.volume = 0;

	playButton.innerHTML = 'Play';
	boardState.playing = false;
	boardState.isClear = true;
	boardState.interval = null;
};

// Toggle Audio
let soundOn = false;
export const toggleSound = (evt) => {
	if (soundOn) {
		audioNature.pause();
		audioFire.pause();
		soundButton.classList.add('off');
		soundButton.setAttribute('aria-label', 'sound on');
		soundOn = false;
	} else {
		audioNature.play();
		audioFire.play();
		soundButton.classList.remove('off');
		soundButton.setAttribute('aria-label', 'sound off');
		soundOn = true;
	}
};
