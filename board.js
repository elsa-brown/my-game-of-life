// -- Constants --
const MAIN = document.getElementById('main');
const AUDIO = document.getElementById('audioPlayer');

// -- Buttons --
const PLAY = document.getElementById('play');
const PAUSE = document.getElementById('pause');
const CLEAR = document.getElementById('clear');
const SOUND = document.getElementById('sound');

// -- Board Properties --
const GOL = {
	width: 30,
	height: 30,
	interval: null,
	cells: {},
	playing: false,
}

// -- Global Audio -- 
let soundOn = true;

// -- Game Events --
// Get individual cell from document
const getCell = (row, col) => {
	let theCell = document.getElementById(`${col}-${row}`);
	if (!theCell) return null
	theCell.xCoord = col;
	theCell.yCoord = row;
	return theCell
};

// Execute iterator function on each cell
const forEachCell = (iteratorFunc) => {
	for (let col = 0; col < GOL.width; col++) {
		for (let row = 0; row < GOL.height; row++) {
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
	console.log('in getNextState')
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

// Set next state for the entire board
const setNextState = (nextBoardState) => {
	for (let cellId in nextBoardState) {
		if (nextBoardState.hasOwnProperty(cellId)) {
			let nextCellState = nextBoardState[cellId]
			GOL.cells[cellId] = nextCellState
			let cell = document.getElementById(cellId)
			cell.className = nextCellState
		}
	}
};

// Step is a single iteration of the game
const step = () => {
	let nextBoardState = Object.assign({}, GOL.cells)
	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = getNextState(cell, row, col)
	})

	setNextState(nextBoardState);
};

// Start game play 
const playGame = () => {
	if (!GOL.playing) {
		let nextBoardState = Object.assign({}, GOL.cells)

		forEachCell((cell, row, col) => {
			console.log('in forEach')
			if (Math.floor((row + col) * Math.random()) % 5 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive'
			}
		})

		setNextState(nextBoardState)

		GOL.playing = true;
	}

	GOL.interval = setInterval(step, 1000)

};

// Pause game
const pauseGame = () => {
		clearInterval(GOL.interval);
		GOL.interval = null;
};

// Clear board
const clearBoard = () => {
	let nextBoardState = Object.assign({}, GOL.cells);

	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = 'dormant'
	});

	setNextState(nextBoardState);
	GOL.interval = null;
	GOL.playing = false;
};

// -- Game audio -- 
const toggleSound = () => {
	if (soundOn) {
		AUDIO.pause();
		SOUND.innerHTML = 'Sound On';
		soundOn = false;
	} else {
		AUDIO.play();
		SOUND.innerHTML = 'Sound Off';
		soundOn = true;
	}
};

// -- Initial Board Set-Up --
const setUpBoardEvents = () => {

	PLAY.addEventListener('click', () => playGame());

	PAUSE.addEventListener('click', () => pauseGame());

	CLEAR.addEventListener('click', () => clearBoard());

	SOUND.innerHTML = 'Sound Off';
	SOUND.addEventListener('click', () => toggleSound());
}

const createAndShowBoard = () => {
	const board = document.createElement('tbody');
	MAIN.appendChild(board);

	for (let i = 0; i < GOL.width; i++) {
		let row = document.createElement('tr');
		board.appendChild(row);

		for (let j = 0; j < GOL.height; j++) {
			GOL.cells[`${i}-${j}`] = 'dormant'
			let cell = document.createElement('td');
			cell.id = `${i}-${j}`
			cell.className = 'dormant'
			row.appendChild(cell);
		}
	}
	setUpBoardEvents()
}

createAndShowBoard();

// set each cell to a volume level audio.volume=number btw 0.0 and 1.0
// make the volume a number relative to the person's chosen number{?}
// i wonder if there could be spatialization of the sound.... 
// each cell is a PannerNode that is turned on or off depending on the cell status

