import { audio, defaultVolNature, boardState } from './_constants';

const maxVol = 0.6;

const getVolumeNature = (volumeFire) => {
	return volumeFire ? 
		maxVol - volumeFire + defaultVolNature : 
		defaultVolNature * 2;
}

const getVolumeFire = (deadCount) => {
	if (!deadCount) return 0;

	const numTotalCells = boardState.dimension * 2;
	const deadCountAdjusted = deadCount + 100;
	
	const volumeFire = deadCountAdjusted ? deadCountAdjusted / numTotalCells * 0.1 : 0;
	return volumeFire > maxVol ? maxVol : volumeFire;
}

export const setVolume = (deadCount) => {
	const volumeFire = getVolumeFire(deadCount);
	const volumeNature = getVolumeNature(volumeFire);

	audio.fire.volume = volumeFire;
	audio.nature.volume = volumeNature;
}
