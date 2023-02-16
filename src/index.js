import { 
	audio,
	defaultVolNature, 
	buttons, 
	boardState 
} from './modules/_constants';

import { 
	togglePlay, 
	clearBoard, 
	toggleSound 
	} from './modules/eventHandlers.js'

const initAudio = () => {
	audio.nature.volume = defaultVolNature;
	audio.fire.volume = 0;
};

const initButtons = () => {
	buttons.play.addEventListener('click', () => togglePlay());
	buttons.clear.addEventListener('click', () => clearBoard());
	buttons.sound.addEventListener('click', () => toggleSound());
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

	window.addEventListener("unhandledrejection", (event) => {
		console.log(event.reason);
	});
}

initAudio();
initButtons();
initBoard();
