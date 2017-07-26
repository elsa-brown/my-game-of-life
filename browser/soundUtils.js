import { audio, fireAudio, boardState } from './constants';

let firstPlay = false;

// volume adjustment to make fireAudio louder
const adjustCountForVolume = (count) => {
	if (count === 0) return count
	else return count += 80
}

// count dead cells
const countDeadCells = () => {
	let deadCells = 0;
	let cells = boardState.cells
	for (var cell in cells) {
		if (cells[cell] === 'dead') {
			deadCells++
		}
	}
	return adjustCountForVolume(deadCells)
}

// adjust for first play
const firstPlayAdjust = (fireVolume) => {
	if (!firstPlay) {
		firstPlay = true;
		return 0.5
	} else {
		return 1 - fireVolume;
	}
}

export const setVolume = () => {
	const totalCells = boardState.width * boardState.height;
	let deadCells = countDeadCells()
	let fireVolume = deadCells / totalCells
	fireAudio.volume = fireVolume
	audio.volume = firstPlayAdjust(fireVolume)
}
