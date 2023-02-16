import { audio, defaultVolNature, intervalMs, buttons, boardState } from './_constants';
import { getCellNextState, setNextState, step } from './game';

// Start/Stop Game
const genesis = (cellId) => {
	const coords = cellId.split('-');
	const x = +coords[0];
	const y = +coords[1];

	const lifeForce = Math.floor((x + y) * Math.random()) % 4 === 0;
	return lifeForce ? 'alive' : 'dormant';
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

		buttons.play.innerHTML = 'Pause';
		boardState.playing = true;
		boardState.isClear = false;
		boardState.interval = setInterval(step, intervalMs);

	} else {
		clearInterval(boardState.interval);
		
		buttons.play.innerHTML = 'Play' ;
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

	audio.nature.volume = defaultVolNature;
	audio.fire.volume = 0;

	buttons.play.innerHTML = 'Play';
	boardState.playing = false;
	boardState.isClear = true;
	boardState.interval = null;
};

// Toggle Audio
let soundOn = false;
export const toggleSound = () => {
	if (soundOn) {
		audio.nature.pause();
		audio.fire.pause();
		buttons.sound.classList.add('off');
		buttons.sound.setAttribute('aria-label', 'sound on');
		soundOn = false;
	} else {
		audio.nature.play();
		audio.fire.play();
		buttons.sound.classList.remove('off');
		buttons.sound.setAttribute('aria-label', 'sound off');
		soundOn = true;
	}
};
