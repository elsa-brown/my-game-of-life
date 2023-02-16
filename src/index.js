import { audioNature, audioFire, defaultVolNature, playButton, clearButton, soundButton, boardState } from './modules/constants';
import { togglePlay, clearBoard, toggleSound } from './modules/eventHandlers.js'

const initButtons = () => {
	playButton.addEventListener('click', () => togglePlay());
	clearButton.addEventListener('click', () => clearBoard());
	soundButton.addEventListener('click', () => toggleSound());
};

const initAudio = () => {
	audioNature.volume = defaultVolNature;
	audioFire.volume = 0;
};

const initBoard = () => {
	const board = document.getElementById('board');

	for (let x = 0; x < boardState.dimension; x++) {
		const row = document.createElement('div');
		row.className = 'row';
		row.id = x;
		board.appendChild(row);

		for (let y = 0; y < boardState.dimension; y++) {
			const cellId = `${x}-${y}`;
			boardState.cells[cellId] = 'dormant';

			const cell = document.createElement('div');
			cell.id = cellId;
			cell.classList.add('dormant');
			row.appendChild(cell);
		}
	}
}

initButtons();
 
initBoard();
