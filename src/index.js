import { main, audioNature, audioFire, playButton, clearButton, soundButton, boardState } from './modules/constants';
import { togglePlay, clearBoard, toggleSound } from './modules/eventHandlers.js'

// -- Buttons --
const initButtons = () => {
	playButton.addEventListener('click', () => togglePlay());
	clearButton.addEventListener('click', () => clearBoard());
	soundButton.addEventListener('click', () => toggleSound());
}

const initAudio = () => {
	audioNature.volume = 0.3;
	audioFire.volume = 0;
}

// -- Initital Board Set-Up --
const createAndShowBoard = () => {
	const board = document.createElement('tbody');
	main.appendChild(board);

	for (let i = 0; i < boardState.width; i++) {
		let row = document.createElement('tr');
		board.appendChild(row);

		for (let j = 0; j < boardState.height; j++) {
			boardState.cells[`${i}-${j}`] = 'dormant'
			let cell = document.createElement('td');
			let img = document.createElement('img');
			cell.id = `${i}-${j}`
			cell.className = 'dormant'
			cell.appendChild(img);
			row.appendChild(cell);
		}
	}	
}

initButtons();
initAudio();
createAndShowBoard();
