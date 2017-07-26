import { audio, fireAudio, boardState } from './constants';

// volume adjustment to make fireAudio louder
const adjustCountForVolume = (count) => {
	if (count === 0) return count
	else return count += 70
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
	console.log('deadCells ', deadCells)
	return adjustCountForVolume(deadCells)
}

export const setVolume = () => {
	const totalCells = boardState.width * boardState.height;
	let deadCells = countDeadCells()
	console.log('deadCells in setVolume ', deadCells)
	let fireVolume = deadCells / totalCells
	fireAudio.volume = fireVolume
	console.log('fireVolume ', fireVolume)
	audio.volume = 1 - fireVolume
}
