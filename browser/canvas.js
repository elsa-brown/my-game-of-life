import { canvas, playButton, pauseButton, clearButton, soundButton, boardState} from './constants';
import { playGame, pauseGame, clearBoard, toggleSound } from './buttonEvents.js'

// -- Buttons --
const createButtonEvents = () => {
	playButton.addEventListener('click', () => playGame());

	pauseButton.addEventListener('click', () => pauseGame());

	clearButton.addEventListener('click', () => clearBoard());

	soundButton.innerHTML = 'Sound Off';
	soundButton.addEventListener('click', () => toggleSound());
}

createButtonEvents();

// -- Initital Board Set-Up --
// const makeCircle = () => {
// 	console.log('inside circle')
// 	const dimension = canvas.width / 2;

// 	const fillImg = new Image();
// 	fillImg.src = '../images/pond-square.gif';

// 	fillImg.onload = () => {
// 		circleCtx.save();
// 		circleCtx.beginPath();
// 		circleCtx.arc(dimension, dimension, dimension, 0, 2 * Math.PI)
// 		circleCtx.closePath();
// 		circleCtx.clip();
// 		ctx.drawImage(fillImg, 0, 0);
// 		ctx.beginPath();
// 		ctx.arc(size, size, size, 0, 2 * Math.PI);
// 	}


// 	// ctx.fillStyle = 'green';
// 	// ctx.fill();
// }

// makeCircle();


// const createAndShowBoard = () => {
// 	// const board = document.createElement('tbody');
// 	// main.appendChild(canvas);

// 	// for (let i = 0; i < boardState.width; i++) {
// 	// 	let row = document.createElement('tr');
// 	// 	board.appendChild(row);

// 	// 	for (let j = 0; j < boardState.height; j++) {
// 	// 		boardState.cells[`${i}-${j}`] = 'dormant'
// 	// 		let cell = document.createElement('td');
// 	// 		cell.id = `${i}-${j}`
// 	// 		cell.className = 'dormant'
// 	// 		row.appendChild(cell);
// 	// 	}
// 	// }
// 	createButtonEvents()
// }

//createAndShowBoard();

// set each cell to a volume level audio.volume=number btw 0.0 and 1.0
// make the volume a number relative to the person's chosen number{?}
// i wonder if there could be spatialization of the sound.... 
// each cell is a PannerNode that is turned on or off depending on the cell status

