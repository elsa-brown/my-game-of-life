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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// -- DOM Elements --
const main = document.getElementById('main');
/* harmony export (immutable) */ __webpack_exports__["d"] = main;

const canvas = document.getElementById('canvas');
/* unused harmony export canvas */

const audio = document.getElementById('audioPlayer');
/* harmony export (immutable) */ __webpack_exports__["f"] = audio;

const fireAudio = document.getElementById('fireAudioPlayer');
/* harmony export (immutable) */ __webpack_exports__["g"] = fireAudio;


// -- Buttons --
const playButton = document.getElementById('play');
/* harmony export (immutable) */ __webpack_exports__["a"] = playButton;

const clearButton = document.getElementById('clear');
/* harmony export (immutable) */ __webpack_exports__["b"] = clearButton;

const soundButton = document.getElementById('sound');
/* harmony export (immutable) */ __webpack_exports__["c"] = soundButton;


// -- Cell Background Images --
const blooms = ['bloom1', 'bloom2', 'bloom3', 'bloom4', 'bloom5'];
/* harmony export (immutable) */ __webpack_exports__["h"] = blooms;


// -- Board Properties --
const boardState = {
	width: 20,
	height: 20,
	interval: null,
	cells: {},
	playing: false,
	firstPlay: false
};
/* harmony export (immutable) */ __webpack_exports__["e"] = boardState;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(3);



// Start game play
const togglePlay = () => {
	if (!__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].playing) {
		let nextBoardState = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells);

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__game__["a" /* forEachCell */])((cell, row, col) => {
			if (Math.floor((row + col) * Math.random()) % 5 === 0) {
				nextBoardState[`${col}-${row}`] = 'alive';
			}
		});
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__game__["b" /* setNextState */])(nextBoardState);

		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* playButton */].innerHTML = 'Pause';
		__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].playing = true;
		__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].interval = setInterval(__WEBPACK_IMPORTED_MODULE_1__game__["c" /* step */], 2100);
	} else {
		clearInterval(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].interval);
		__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].interval = null;
		__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* playButton */].innerHTML = 'Play';
		__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].playing = false;
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = togglePlay;


// Clear board
const clearBoard = () => {
	let nextBoardState = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells);

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__game__["a" /* forEachCell */])((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = 'dormant';
	});

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__game__["b" /* setNextState */])(nextBoardState);
	clearInterval(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].interval);
	__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].interval = null;
	__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].playing = false;
	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* playButton */].innerHTML = 'Play';

	__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* audio */].volume = 0.3;
	__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].firstPlay = false;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = clearBoard;


// Toggle Audio
let soundOn = true;
const toggleSound = () => {
	if (soundOn) {
		__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* audio */].pause();
		__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* fireAudio */].pause();
		__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* soundButton */].className = 'line-through';
		soundOn = false;
	} else {
		__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* audio */].play();
		__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* fireAudio */].play();
		__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* soundButton */].className = null;
		soundOn = true;
	}
};
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleSound;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttonEvents_js__ = __webpack_require__(1);



// -- Buttons --
const createButtonEvents = () => {

	__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* playButton */].addEventListener('click', () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buttonEvents_js__["a" /* togglePlay */])());

	__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* clearButton */].addEventListener('click', () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buttonEvents_js__["b" /* clearBoard */])());

	__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* soundButton */].innerHTML = 'Sound';
	__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* soundButton */].addEventListener('click', () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buttonEvents_js__["c" /* toggleSound */])());
};

// -- Initital Board Set-Up --
const createAndShowBoard = () => {
	const board = document.createElement('tbody');
	__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* main */].appendChild(board);

	for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].width; i++) {
		let row = document.createElement('tr');
		board.appendChild(row);

		for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].height; j++) {
			__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells[`${i}-${j}`] = 'dormant';
			let cell = document.createElement('td');
			cell.id = `${i}-${j}`;
			cell.className = 'dormant';
			row.appendChild(cell);
		}
	}
	// set initial fire volume to zero before game play
	__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* audio */].volume = 0.3;
	__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* fireAudio */].volume = 0;
	createButtonEvents();
};

createAndShowBoard();

// set each cell to a volume level audio.volume=number btw 0.0 and 1.0
// make the volume a number relative to the person's chosen number{?}
// i wonder if there could be spatialization of the sound.... 
// each cell is a PannerNode that is turned on or off depending on the cell status

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__soundUtils__ = __webpack_require__(4);



// Get individual cell from document
const getCell = (row, col) => {
	let theCell = document.getElementById(`${col}-${row}`);
	if (!theCell) return null;
	theCell.xCoord = col;
	theCell.yCoord = row;
	return theCell;
};

// Execute iterator function on each cell
const forEachCell = iteratorFunc => {
	for (let col = 0; col < __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].width; col++) {
		for (let row = 0; row < __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].height; row++) {
			let theCell = getCell(row, col);
			iteratorFunc(theCell, row, col);
		}
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = forEachCell;


// Get neighboring cells for a single cell
const getNeighborhood = (cell, row, col) => {
	let neighborIds = [];
	for (let i = col - 1; i <= col + 1; i++) {
		for (let j = row - 1; j <= row + 1; j++) {
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

// Get number of living neighbors for a single cell
const countLiveNeighbors = neighborIds => {
	let liveNeighbors = 0;
	neighborIds.map(id => {
		return document.getElementById(id);
	}).forEach(neighbor => {
		if (neighbor && neighbor.classList.contains('alive')) {
			liveNeighbors++;
		}
	});
	return liveNeighbors;
};

// Determine next state for a single cell, based on numbr of live neighbors
const getNextState = (cell, row, col) => {
	let neighborhood = getNeighborhood(cell, row, col);

	let liveNeighbors = countLiveNeighbors(neighborhood);

	let status = cell.classList;

	if (status.contains('alive')) {
		if (liveNeighbors < 2 || liveNeighbors > 3) return 'dead';else return status;
	} else {
		if (liveNeighbors === 3) return 'alive';else return 'dormant';
	}
};

// Set new bloom gif for each live cell
const getBloom = () => {
	let idx = Math.floor(Math.random() * 5);
	return __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* blooms */][idx];
};

// Set next state for the entire board
const setNextState = nextBoardState => {
	for (let cellId in nextBoardState) {
		if (nextBoardState.hasOwnProperty(cellId)) {
			let nextCellState = nextBoardState[cellId];
			__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells[cellId] = nextCellState;
			let cell = document.getElementById(cellId);
			cell.className = nextCellState;
			if (cell.className === 'alive') cell.classList.add(getBloom());
		}
	}
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__soundUtils__["a" /* setVolume */])();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = setNextState;


// Step is a single iteration of the game
const step = () => {
	let nextBoardState = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells);
	forEachCell((cell, row, col) => {
		nextBoardState[`${col}-${row}`] = getNextState(cell, row, col);
	});

	setNextState(nextBoardState);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = step;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


let firstPlay = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].firstPlay;

// volume adjustment to make fireAudio louder
const adjustCountForVolume = count => {
	if (count === 0) return count;else return count += 70;
};

// count dead cells
const countDeadCells = () => {
	let deadCells = 0;
	let cells = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].cells;
	for (var cell in cells) {
		if (cells[cell] === 'dead') {
			deadCells++;
		}
	}
	return adjustCountForVolume(deadCells);
};

// adjust for first play
const firstPlayAdjust = fireVolume => {
	if (!firstPlay) {
		firstPlay = true;
		return 0.5;
	} else {
		return 1 - fireVolume;
	}
};

const setVolume = () => {
	const totalCells = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].width * __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* boardState */].height;
	let deadCells = countDeadCells();
	let fireVolume = deadCells / totalCells;
	__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* fireAudio */].volume = fireVolume;
	__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* audio */].volume = firstPlayAdjust(fireVolume);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = setVolume;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map