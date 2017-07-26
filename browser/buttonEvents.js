import { audio, fireAudio, playButton, soundButton, boardState } from './constants';
import { forEachCell, setNextState, step } from './game';
// import { setVolume } from './soundUtils';

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
		boardState.interval = setInterval(step, 2100)
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
};

// Audio fade
/*
const soundFadeOut = (elem) => {
	let fadeOut = setInterval(() => {
		console.log('volume out ', elem.volume)
		while (elem.volume > 0.1) {
			elem.volume -= 0.1;
		}
		if (elem.volume === 0.0) {
			clearInterval(fadeOut)
		}
	})
}

const soundFadeIn = (elem) => {
	// console.log(elem)
	let fadeIn = setInterval(() => {
		while (elem.volume < 1) {
			console.log('volume', elem.volume)
			elem.volume += 0.1;
		}
		if (elem.volume === 1 ) {
			clearInterval(fadeIn)
		}
	})

}
*/

// Toggle Audio
let soundOn = true;
export const toggleSound = () => {
	if (soundOn) {
		audio.pause();
		fireAudio.pause();
		soundButton.className = 'line-through';
		soundOn = false;
	} else {
		// soundFadeIn(audio);
		audio.play();
		fireAudio.play();
		soundButton.className = null;
		soundOn = true;
	}
};
