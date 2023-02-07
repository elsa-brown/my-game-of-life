import { boardState, fire, getBloom } from './constants';
import { setVolume } from './audioUtils';

// Set next state for the entire board
export const setNextState = (nextBoardState) => {
	let deadCount = 0;

	for (const cellId in nextBoardState) {
		const currCellState = boardState.cells[cellId];
		const nextCellState = nextBoardState[cellId];

		const cell = document.getElementById(cellId);
		cell.className = nextCellState;

		if (nextCellState === 'alive' && currCellState === 'alive') {
			continue;
		} 
		
		if (nextCellState == 'alive') {
				cell.querySelector('img').src = getBloom();
		} 
		
		if (nextCellState === 'dead') {
			if (currCellState !== 'dead') {
					cell.querySelector('img').src = fire;
					deadCount++;
			} else {
				// cell.style.backgroundColor = 'white';
				// cell.querySelector('img').src = '';
				cell.classList.add('has-died');
			}
		}

		boardState.cells[cellId] = nextCellState;
	}

	console.log('deadCount: ', deadCount);
	setVolume(deadCount)
};

const getLiveNeighbors = (neighborhood) => {
	return neighborhood.filter(id => {
		const neighbor = boardState.cells[id];
		return neighbor === 'alive';
	});
}

const getNeighborhood = (x, y) => {
	
	let neighborhood = [];

	for (let row = x - 1; row <= x + 1; row++) {
		for (let col = y - 1; col <= y + 1; col++) {

			const isInBounds = 
					row >= 0 && // x
					col >= 0 && // y
					row < boardState.width &&
					col < boardState.height;

			const isSelf = (col === x && row === y);

			if (isInBounds && !isSelf) {
				neighborhood.push(`${row}-${col}`);
			}
		}
	}

	return neighborhood;
};

// Determine next state for a single cell, based on numbr of live neighbors
const getCellNextState = (cellId) => {
	const coords = cellId.split('-');
	const neighborhood = getNeighborhood(+coords[0], +coords[1]);
	const numLiveNeighbors = getLiveNeighbors(neighborhood).length;
	const currCellState = boardState.cells[cellId];

	let nextCellState = currCellState;

	if (currCellState === 'alive') {
		if (numLiveNeighbors < 2 || numLiveNeighbors > 3) {
			nextCellState = 'dead';
		} 
	} else {
	 	if (numLiveNeighbors === 3) {
			nextCellState = 'alive';
		}
	}

	return nextCellState;
};



// Step is a single iteration of the game
// let count = 3;
export const step = () => {
	// count--;

	const boardNextState = {...boardState.cells};

	for (const cellId in boardState.cells) {
		const cellNextState = getCellNextState(cellId);
		boardNextState[cellId] = cellNextState;
	}

		// if (count) {
			setNextState(boardNextState);
		// } else if (count === 0) {
		// 	clearInterval(boardState.interval);
		// }
};

