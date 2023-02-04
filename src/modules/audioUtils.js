import { audioNature, audioFire, boardState } from './constants';

/* SCROLL TO BOTTOM */

const getVolumeNature = (volumeFire) => {
	
	let volumeNature;

	if (boardState.hasPlayed) {
		boardState.hasPlayed = !!boardState.hasPlayed

		volumeNature = 0.5
	} else {
		volumeNature = 1 - volumeFire;
	}
	
	return volumeNature;
}

const getVolumeFire = () => {

	let volumeFire;

	const numTotalCells = Object.keys(boardState.cells).length;
	const numDeadCells = Object.values(boardState.cells).filter(
		cell => cell === 'dead'
	).length;
	const numDeadCellsAdjusted = numDeadCells + 70;
	
	volumeFire = !volumeFire ? 
		0 : 
		numDeadCellsAdjusted / numTotalCells;

	return volumeFire;
}

export const setVolume = () => {
	const volumeFire = getVolumeFire()
	const volumeNature = getVolumeNature(volumeFire)

	audioFire.volume = volumeFire;
	audioNature.volume = volumeNature;
}
