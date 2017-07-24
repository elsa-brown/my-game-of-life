import { blooms, boardState } from './constants';

// Get individual cell from document
const getCell = (row, col) => {
	let theCell = document.getElementById(`${col}-${row}`);
	if (!theCell) return null
	theCell.xCoord = col;
	theCell.yCoord = row;
	return theCell
};

// Execute iterator function on each cell
export const forEachCell = (iteratorFunc) => {
	for (let col = 0; col < boardState.width; col++) {
		for (let row = 0; row < boardState.height; row++) {
			let theCell = getCell(row, col)
			iteratorFunc(theCell, row, col)
		}
	}
};

// Get neighboring cells for a single cell
const getNeighborhood = (cell, row, col) => {
	let neighborIds = [];
	for (let i = col - 1; i <= col + 1; i++) {
		for (let j = row - 1; j <= row + 1; j++) {
			if (i !== col || j !== row) {
				if (i > -1 && j > -1) {
					let neighborId = i + '-' + j;
					if (neighborId) neighborIds.push(neighborId)
				}
			}
		}
	}
	return neighborIds;
};

// Get number of living neighbors for a single cell
const countLiveNeighbors = (neighborIds) => {
	let liveNeighbors = 0
	neighborIds.map(id => {
		return document.getElementById(id)
	}).forEach(neighbor => {
		if (neighbor && neighbor.className === 'alive') liveNeighbors++
	})
	return liveNeighbors;
};

// Determine next state for a single cell, based on numbr of live neighbors
const getNextState = (cell, row, col) => {
	// console.log('in getNextState', cell, 'cell')
	let neighborhood = getNeighborhood(cell, row, col);

	let liveNeighbors = countLiveNeighbors(neighborhood);

	let status = cell.className;

	if (status === 'alive') {
		if (liveNeighbors < 2 || liveNeighbors > 3) return 'dead';
		return status;
	} else {
		if (liveNeighbors === 3) return 'alive';
		return status;
	}
};

// Set new bloom gif for each live cell
const getBloom = () => {
	let idx = Math.floor(Math.random() * (4 - 1)) + 1
	// console.log('blooms is ', blooms, 'idx is ', idx)
	return blooms[idx]
}

// Set next state for the entire board
export const setNextState = (nextBoardState) => {
	for (let cellId in nextBoardState) {
		if (nextBoardState.hasOwnProperty(cellId)) {
			let nextCellState = nextBoardState[cellId]
			boardState.cells[cellId] = nextCellState
			let cell = document.getElementById(cellId)
			cell.className = nextCellState
			if (cell.className === 'alive') cell.classList.add(getBloom())
		}
	}
};

// Step is a single iteration of the game
export const step = () => {
	let nextBoardState = Object.assign({}, boardState.cells)
	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = getNextState(cell, row, col)
	})

	setNextState(nextBoardState);
};

