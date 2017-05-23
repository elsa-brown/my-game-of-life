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

var GOL = {
	width: 30,
	height: 30,
	stepInterval: null,

	createAndShowBoard: function () {
		var gameBoard = document.createElement("tbody");

		var tablehtml = '';
		for (var h = 0; h < this.height; h++) {
			tablehtml += `<tr id="row-${h}">`;
			for (var w = 0; w < this.width; w++) {
				tablehtml += `<td data-status="dead" id="${w}-${h}""></td>`;
			}
			tablehtml += `</tr>`;
		}
		gameBoard.innerHTML = tablehtml;

		document.getElementById("board").appendChild(gameBoard);

		this.setUpBoardEvents();
	},

	getCell: function (row, col) {
		var theCell = document.getElementById(`${col}-${row}`);
		if (!theCell) return null;
		theCell.col = col;
		theCell.row = row;
		return theCell;
	},

	forEachCell: function (iterator) {
		for (var col = 0; col < this.width; col++) {
			for (var row = 0; row < this.height; row++) {
				var theCell = this.getCell(row, col);
				iterator(theCell, row, col);
			}
		}
	},

	applyState: function (nextState) {
		this.forEachCell((cell, row, col) => {
			var theStatus = nextState[col][row] ? 'alive' : cell.className = theStatus;
			cell.dataset.status = theStatus;
		});
	},

	setUpBoardEvents: function () {
		var onCellClick = function (e) {
			if (this.dataset.status === 'dead') {
				this.className = 'alive';
				this.dataset.status = 'alive';
			} else {
				this.className = 'dead';
				this.dataset.status = 'dead';
			}
		};

		window.board.addEventListener('click', e => onCellClick.call(e.target, e));
	},

	neighborhood: function (cell) {
		var neighbors = [];
		for (var col = cell.col - 1; col <= cell.col + 1; col++) {
			for (var row = cell.row - 1; row <= cell.row + 1; row++) {
				if (row === cell.row && col === cell.col) continue;
				var theCell = this.getCell(row, col);
				if (theCell) neighbors.push(theCell);
			}
		}
		return neighbors;
	},

	getNextState: function (cell, row, col) {
		var livingNeighbors = this.neighborhood(cell).map(el => el.dataset.status === 'alive' ? 1 : 0).reduce((sum, alive) => sum + alive, 0);

		if (cell.dataset.status === 'alive') {
			if (livingNeighbors === 2 || livingNeighbors === 3) return true;
			return false;
		}

		if (livingNeighbors === 3) return true;
		return false;
	},

	step: function () {
		var nextState = new Array(this.width).fill('').map(el => []);

		this.forEachCell((cell, row, col) => nextState[col][row] = this.getNextState(cell, row, col));

		this.applyState(nextState);
	},

	togglePlay: function () {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		} else {
			this.interval = stepInterval(() => this.step(), 250);
		}
	},

	randomize: function () {
		var nextState = new Array(this.width).fill('').map(el => new Array(this.height).fill('').map(cell => Math.random() <= 0.5));
		this.applyState(nextState);
	},

	clearBoard: function () {
		this.applyState(new Array(this.width).fill([]));
	}
};

GOL.createAndShowBoard();

//TODO-function to make Live cell background images cycle thru a selection of gifs
// var getCellGif = function() {
// 	var urlName = '';

// 	for (var i = 0; i < 10; i++) {
// 		urlName += `url(/public/life-${i})`
// 	}

// 	var theCell = document.getElementById("td");
// 	if (theCell.className === 'alive') {
// 		theCell.innerHTML += `style: backround-image="${urlName}"`
// 	}
// }

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map