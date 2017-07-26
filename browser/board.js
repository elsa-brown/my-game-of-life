import { main, audio, fireAudio, playButton, clearButton, soundButton, boardState } from './constants';
import { togglePlay, clearBoard, toggleSound } from './buttonEvents.js'

// -- Buttons --
const createButtonEvents = () => {

	playButton.addEventListener('click', () => togglePlay());

	clearButton.addEventListener('click', () => clearBoard());

	soundButton.innerHTML = 'Sound';
	soundButton.addEventListener('click', () => toggleSound());
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
			cell.id = `${i}-${j}`
			cell.className = 'dormant'
			row.appendChild(cell);
		}
	}
	// set initial fire volume to zero before game play
	audio.volume = 0.3;
	fireAudio.volume = 0;
	createButtonEvents()
}

createAndShowBoard();

// set each cell to a volume level audio.volume=number btw 0.0 and 1.0
// make the volume a number relative to the person's chosen number{?}
// i wonder if there could be spatialization of the sound.... 
// each cell is a PannerNode that is turned on or off depending on the cell status

