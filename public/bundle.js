/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

let GOL = {
	width: 30,
	height: 30,
	interval: null,
	cells: {}

	// set each cell to a volume level audio.volume=number btw 0.0 and 1.0
	// make the volume a number relative to the person's chosen number{?}
	// i wonder if there could be spatialization of the sound.... 
	// each cell is a PannerNode that is turned on or off depending on the cell status


};let setUpBoardEvents = () => {
	const onCellClick = cell => {
		let cellId = cell.id;
		if (GOL.cells[cellId] === 'dormant') {
			if (cellId[cellId.length - 1] % 2 === 0) {
				GOL.cells[cellId] = 'alive';
				cell.className = 'alive';
			} else {
				GOL.cells[cellId] = 'alive';
				cell.className = 'alive2';
			}
		}
	};

	let board = document.getElementById('main');
	board.addEventListener('mousedown', evt => {
		let cell = evt.target;
		onCellClick(cell);
	});
	let play = document.getElementById('button');
	play.addEventListener('click', evt => togglePlay());
};

let createAndShowBoard = () => {
	const main = document.getElementById('main');
	const board = document.createElement('tbody');
	main.appendChild(board);

	for (let i = 0; i < GOL.width; i++) {
		let row = document.createElement('tr');
		row.id = i;
		board.appendChild(row);

		for (let j = 0; j < GOL.height; j++) {
			GOL.cells[`${i}-${j}`] = 'dormant';
			let cell = document.createElement('td');
			cell.id = `${i}-${j}`;
			cell.className = 'dormant';
			row.appendChild(cell);
		}
	}
	setUpBoardEvents();
	// console.log('board', board)
	// console.log('cells', this.cells)
};

let getCell = (row, col) => {
	// console.log('inside getCell', row, col)
	let theCell = document.getElementById(`${col}-${row}`);
	// console.log('theCell', theCell)
	if (!theCell) return null;
	theCell.xCoord = col;
	theCell.yCoord = row;
	return theCell;
};

let forEachCell = iteratorFunc => {
	// console.log('inside forEachCell')
	for (let col = 0; col < GOL.width; col++) {
		for (let row = 0; row < GOL.height; row++) {
			let theCell = getCell(row, col);
			iteratorFunc(theCell, row, col);
		}
	}
};

// nextState is an object literal
let setNextState = nextBoardState => {
	for (var cellId in nextBoardState) {
		let nextCellState = nextBoardState[cellId];
		GOL.cells[cellId] = nextCellState;
		let cell = document.getElementById(cellId);
		cell.className = nextCellState;
	}
	// for (var i = 0; i < nextState.length; i++) {
	// 	for (var j = 0; j < nextState[i].length; j++) {
	// 		let nextStatus = nextState[i][j] ? 'alive' : 'dead'
	// 		cells[`${i}-${j}`] = nextStatus
	// 	}
	// }
	console.log('newCells', GOL.cells);
};

let getNeighborhood = (cell, row, col) => {
	let neighborIds = [];
	for (let i = col - 1; i <= col + 1; i++) {
		for (let j = row - 1; j <= row + 1; j++) {
			// console.log('neighbor coords', i, j)
			if (i !== col || j !== row) {
				if (i > -1 && j > -1) {
					let neighborId = i + '-' + j;
					if (neighborId) neighborIds.push(neighborId);
				}
			}
		}
	}
	return neighborIds;
};

let countLiveNeighbors = neighborIds => {
	// console.log('neighborIds', neighborIds)
	let liveNeighbors = 0;
	neighborIds.map(id => {
		return document.getElementById(id);
	}).forEach(neighbor => {
		if (neighbor && neighbor.className === 'alive') liveNeighbors++;
	});
	// console.log('liveNeighbors', liveNeighbors)
	return liveNeighbors;
};

let getNextState = (cell, row, col) => {
	let neighborhood = getNeighborhood(cell, row, col);
	// console.log('Inside getNextState. cell is', cell)

	// console.log('neighbors', neighborIds)
	let liveNeighbors = countLiveNeighbors(neighborhood);
	// console.log('cell: ', cell, 'liveNeighbors: ', liveNeighbors)

	if (cell.className === 'alive' || cell.className === 'alive2') {
		if (liveNeighbors < 2 || liveNeighbors > 3) return 'dead';else return 'alive';
	}
	if (cell.className === 'dead') {
		if (liveNeighbors === 3) return 'alive';else return 'dead';
	}
	if (cell.className === 'dormant') {
		if (liveNeighbors === 3) return 'alive';else return 'dormant';
	}

	//if (cell.className === 'alive' &&)
	// 	.map(el => {
	// 		console.log('el', el)
	// 		el.className === 'alive' ? 1 : 0
	// 	})
	// 	.reduce((sum, alive) => sum + alive, 0)

};

let step = () => {
	let nextBoardState = Object.assign({}, GOL.cells);
	// let nextBoardState = new Array(GOL.width).fill('')
	// 		.map(el => new Array(GOL.height).fill(''))
	// // console.log('nextBoardState', nextBoardState)
	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = getNextState(cell, row, col);
	});
	console.log('nextBoardState', nextBoardState);

	setNextState(nextBoardState);
};

let togglePlay = () => {
	if (GOL.interval) {
		clearInterval(GOL.interval);
		GOL.interval = null;
	} else {
		GOL.interval = setInterval(() => step(), 150);
	}
};

// randomize: function() {
// 	let nextBoardState = new Array(this.width).fill('')
// 		.map(el => new Array(this.height).fill('')
// 			.map(cell => Math.random() <= 0.5))
// 		console.log('nextBoardState', nextBoardState)

// 		this.setNextState(nextBoardState)
// }

createAndShowBoard();

// canvas
// const gameDisplay = (width = 30, height = 30, cellSize = 18) => {
// 	let canvas = document.getElementById('canvas')
// 	const ctx = canvas.getContext && canvas.getContext('2d')
// 	const widthPx = width * cellSize
// 	const heightPx = height * cellSize
// }

// const drawGridLines = () => {
// 		ctx.lineWidth = 1;
// 		ctx.strokeStyle = "rgb(255, 0, 0)";
// 		ctx.beginPath();
// 		for (let i = 0; i <= width; i++) {
// 			ctx.moveTo(i * cellSize, 0);
// 			ctx.lineTo(i * cellSize, heightPx)
// 		}
// 		for (let j = 0; j <= height; j++) {
// 			ctx.moveTo(j * cellSize, 0);
// 			ctx.lineTo(j * widthPx, j * cellSize)
// 		}
// 		ctx.stroke();
// 	}

// gameDisplay();

// const table = document.getElementById('board');

// const Board = (width = 30, height = 30) => {
// 	this.width = width
// 	this.height = height
// 	this.cells = []
// }


// const populateBoard = (board) => {
// 	for (var i = 0; i < this.width; i++) {
// 		for (var j = 0; j < this.height; j++) {
// 			let theCell = new Cell(i, j);
// 			this.cells.push(theCell)
// 	}
// }

// class Cell {
// 	constructor(xCoord, yCoord, state) {
// 		this.xCoord = xCoord;
// 		this.yCoord = yCoord;
// 		this.state = state || 'dormant'
// 	}

// 	getX() {
// 		return this.xCoord;
// 	}

// 	getY() {
// 		return this.xCoord;
// 	}

// 	getState() {
// 		return this.state;
// 	}

// 	setState(newState) {
// 		this.state = newState;
// 	}

// 	getNeighborhood(board) {
// 		let x = this.xCoord;
// 		let y = this.yCoord;
// 		let width = board.width;
// 		let height = board.height;

// 		let left =  x === 0 ? (width - 1) : (x - 1);
// 		let right = x === width ? 0 : (x + 1);
// 		let top = y === height ? 0 : (y - 1);
// 		let bottom = y === 0 ? height : (y + 1);	
// 	}
// }


// 	// pulls our first two elements of array and names them row and col
// 	indexFor([row, col]) {
// 		// return undefined if out of bounds
// 		// TODO: refactor to send to other side of board
// 		if (row < 0 || row >= this.height) || col < 0 || col >= this.width) return
// 		return row * this.width + col
// 	}

// 	getCoords(coords) {
// 		return this.cells[this.indexFor(coords)] || 0
// 	}

// 	set(coords, value) {
// 		this.cells[this.indexFor(coords)] = value;
// 	}

// 	countlivingNeighbors(row, col) {
// 		// Store each neighbor cell's coordinates in a variable. 
// 		// If a cell is at the board boundary, make a neighbor on the opposite side of the board
// 		const left = row - 1 < 0 ? (this.width - 1) : (row - 1);
// 		const right = row + 1 === this.width ? 0 : (x + 1);
// 		const top = col - 1 < 0 ? (this.height - 1) : (y - 1);
// 		const bottom = col + 1 === this.height ? 0 : (y + 1);

// 		let count = 0;

// 		isAlive(cells[top][left]) count++;
// 		isAlive(cells[top][col]) count++;
// 		isAlive(cells[top][right]) count++;
// 		isAlive(cells[row][left]) count++;
// 		isAlive(cells[row][right]) count++;
// 		isAlive(cells[bottom][left]) count++;
// 		isAlive(cells[bottom][col]) count++;
// 		isAlive(cells[bottom][right]) count++;


// 	}

// 	toggle(coords) {
// 		this.set(coords, 1 - this.get(coords));
// 	}
// }

// const isAlive(row, col) {
// 	if (cells[row][col] === 'alive') return true;
// 	else return false;
// }

// // iterator to apply to each cell
// const conway = (isAlive, numLivingNeighbors) => {
// 	if (isAlive) {
// 		return numLivingNeighbors === 2 || numLivingNeighbors === 3;
// 	} else {
// 		return numLivingNeighbors === 3;
// 	}
// }

// // compare current state to next state and update
// const tick(presentState, nextState, rules=conway) {
// 	for (var i = 0; i < presentState.height; i++) {
// 		for (var j = 0; j< present.width; j++) {
// 			const shouldBeAlive = rules(present.get([i, j]), present.livingNeighbors([i, j]));
// 			future.set([i, j], shouldBeAlive);
// 		}
// 	}
// 	return [nextState, presentState]
// }


// var GOL = {
// 	width: 30,
// 	height: 30,
// 	stepInterval: null,

// 	createAndShowBoard: function() {
// 		var gameBoard = document.createElement("tbody");

// 		var tablehtml = '';
// 		for (var h = 0; h < this.height; h++) {
// 			tablehtml += `<tr id="row-${h}">`
// 			for (var w = 0; w < this.width; w++) {
// 				tablehtml += `<td data-status="dead" id="${w}-${h}""></td>`
// 			}
// 			tablehtml += `</tr>`
// 		}
// 		gameBoard.innerHTML = tablehtml;

// 		document.getElementById("board").appendChild(gameBoard);

// 		this.setUpBoardEvents();
// 	},

// 	getCell: function(row, col) {
// 		var theCell = document.getElementById(`${col}-${row}`)
// 		if(!theCell) return null
// 		theCell.col = col;
// 		theCell.row = row;
// 		return theCell;
// 	},

// 	forEachCell: function(iterator) {
// 		for (var col = 0; col < this.width; col++) {
// 			for (var row = 0; row < this.height; row++) {
// 				var theCell = this.getCell(row, col)
// 				iterator(theCell, row, col)
// 			}
// 		}
// 	},

// 	applyState: function(nextState) {
// 		this.forEachCell((cell, row, col) => {
// 			var theStatus = nextState[col][row] ? 'alive' :
// 			cell.className = theStatus;
// 			cell.dataset.status = theStatus;
// 		})
// 	},

// 	setUpBoardEvents: function() {
// 		var onCellClick = function(e) {
// 			if (this.dataset.status === 'dead') {
// 				this.className = 'alive';
// 				this.dataset.status = 'alive';
// 			} else {
// 				this.className = 'dead';
// 				this.dataset.status = 'dead';
// 			}
// 		}

// 		window.board.addEventListener('click', e => onCellClick.call(e.target, e))
// 	},

// 	neighborhood: function(cell) {
// 		var neighbors = [];
// 		for (var col = cell.col - 1; col <= cell.col + 1; col++) {
// 			for (var row = cell.row - 1 ; row <= cell.row + 1; row++) {
// 				if (row === cell.row && col === cell.col) continue
// 				var theCell = this.getCell(row, col)
// 				if (theCell) neighbors.push(theCell)
// 			}
// 		}
// 		return neighbors
// 	},

// 	getNextState: function(cell, row, col) {
// 		var livingNeighbors = this.neighborhood(cell)
// 			.map(el => el.dataset.status === 'alive' ? 1 : 0)
// 			.reduce((sum, alive) => sum + alive, 0)

// 		if (cell.dataset.status === 'alive') {
// 			if(livingNeighbors === 2 || livingNeighbors === 3) return true
// 			return false
// 		}

// 		if (livingNeighbors === 3) return true
// 		return false
// 	},

// 	step: function() {
// 		var nextState = new Array(this.width).fill('').map(el => []);

// 		this.forEachCell((cell, row, col) =>
// 			nextState[col][row] = this.getNextState(cell, row, col)
// 		)

// 		this.applyState(nextState);
// 	},

// 	togglePlay: function() {
// 		if(this.interval) {
// 			clearInterval(this.interval);
// 			this.interval = null
// 		} else {
// 			this.interval = stepInterval(() => this.step(), 250)
// 		}
// 	},

// 	randomize: function() {
// 		var nextState = new Array (this.width).fill('')
// 			.map(el => new Array(this.height).fill('')
// 				.map(cell => Math.random() <= 0.5)
// 			)
// 		this.applyState(nextState)
// 	},

// 	clearBoard: function() {
// 		this.applyState(new Array(this.width).fill([]))
// 	}
// };

// GOL.createAndShowBoard();

// //TODO-function to make Live cell background images cycle thru a selection of gifs
// // var getCellGif = function() {
// // 	var urlName = '';

// // 	for (var i = 0; i < 10; i++) {
// // 		urlName += `url(/public/life-${i})`
// // 	}

// // 	var theCell = document.getElementById("td");
// // 	if (theCell.className === 'alive') {
// // 		theCell.innerHTML += `style: backround-image="${urlName}"`
// // 	}
// // }

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map