import { audio, fireAudio, boardState } from './constants';

// count dead cells
const countDeadCells = () => {
	let deadCells = 0;
	let cells = boardState.cells
	for (var cell in cells) {
		if (cells[cell] === 'dead') {
			deadCells++
		}
	}
	return deadCells
}

export const setVolume = () => {
	const totalCells = boardState.width * boardState.height;
	let deadCells = countDeadCells()
	let fireVolume = deadCells / totalCells
	fireAudio.volume = fireVolume
	audio.volume = 1 - fireVolume;
}
