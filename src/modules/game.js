import { boardState, fire, getBloom, getBloomName } from './constants';
import { setVolume } from './audioUtils';

// Set next state for the entire board
export const setNextState = (nextBoardState) => {
	let deadCount = 0;
	let cell;

	for (const cellId in nextBoardState) {
		const currCellState = boardState.cells[cellId];
		const nextCellState = nextBoardState[cellId];

		const cellWillDie = nextCellState === 'dead';

		if (!cellWillDie && currCellState !== nextCellState) {
			cell = document.getElementById(cellId);
			cell.className = nextCellState; 

			if (nextCellState === 'alive') {
				cell.classList.add(getBloomName());
			}

		} else if (cellWillDie) {
			cell = document.getElementById(cellId);
			cell.className = nextCellState; 

			if (currCellState === 'dead') {
				cell.classList.remove('dying');
				cell.classList.add('gone');
			} else {
				cell.classList.add('dying');
				deadCount++;
			}

		}

		boardState.cells[cellId] = nextCellState;
	}

	setVolume(deadCount);
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
					row < boardState.dimension &&
					col < boardState.dimension;

			const isSelf = (col === x && row === y);

			if (isInBounds && !isSelf) {
				neighborhood.push(`${row}-${col}`);
			}
		}
	}

	return neighborhood;
};

// Determine next state for a single cell, based on numbr of live neighbors
export const getCellNextState = (cellId) => {
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
export const step = () => {
	const boardNextState = {...boardState.cells};

	for (const cellId in boardState.cells) {
		const cellNextState = getCellNextState(cellId);
		boardNextState[cellId] = cellNextState;
	}


	setNextState(boardNextState);
};

