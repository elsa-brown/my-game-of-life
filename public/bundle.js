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
	width: 60,
	height: 60,
	interval: null,
	cells: {},
	playing: false

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

	let play = document.getElementById('play');
	play.addEventListener('click', evt => {
		playGame();
	});

	let pause = document.getElementById('pause');
	pause.addEventListener('click', evt => pauseGame());
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
};

let getCell = (row, col) => {
	let theCell = document.getElementById(`${col}-${row}`);
	if (!theCell) return null;
	theCell.xCoord = col;
	theCell.yCoord = row;
	return theCell;
};

let forEachCell = iteratorFunc => {
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
};

let step = () => {
	let nextBoardState = Object.assign({}, GOL.cells);
	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = getNextState(cell, row, col);
	});
	console.log('nextBoardState', nextBoardState);

	setNextState(nextBoardState);
};

let pauseGame = () => {
	if (GOL.interval) {
		clearInterval(GOL.interval);
		GOL.interval = null;
	}
	// else {
	// 	GOL.interval = setInterval(() => step(), 200)
	// }
};

let playGame = () => {
	if (!GOL.playing) {
		let nextBoardState = Object.assign({}, GOL.cells);

		forEachCell((cell, row, col) => {
			if (Math.floor((col + row) * Math.random()) % 13 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive';
			} else if (Math.floor((col + row) * Math.random()) % 12 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive2';
			} else {
				nextBoardState[`${col}-${row}`] = 'dormant';
			}
		});

		console.log('nextBoardState', nextBoardState);

		setNextState(nextBoardState);
		GOL.interval = setInterval(() => step(), 400);
		GOL.playing = true;
	} else {
		GOL.interval = setInterval(() => step(), 400);
	}
};

createAndShowBoard();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map