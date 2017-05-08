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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_build_date_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_build_wrap_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_build_days_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_build_months_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_build_years_js__ = __webpack_require__(9);






let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__components_build_date_js__["a" /* buildDate */])(dateSelect)
  },
  addListener: function(createSelect) {
    createSelect.addEventListener('change', function() {
      dateSelect.getSetCurrentDate()
      dateSelect.buildDOM()
    })
  },
  getSetCurrentDate: function() {
    this.currentYear = parseFloat(selectID3.options[selectID3.selectedIndex].value)
    this.currentMonth = parseFloat(selectID2.options[selectID2.selectedIndex].value)
    this.currentDay = parseFloat(selectID1.options[selectID1.selectedIndex].value)
  },
  buildDOM: function() {
    document.body.innerHTML = ''
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_build_wrap_js__["a" /* buildWrap */])(dateSelect)
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__components_build_years_js__["a" /* buildYears */])(dateSelect)
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__components_build_months_js__["a" /* buildMonths */])(dateSelect)
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_build_days_js__["a" /* buildDays */])(dateSelect)
    console.log(dateSelect)
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bulma.css";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.css";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildDate; });
let buildDate = function(dateSelect) {
  let maxDay = 300
  let today = new Date()
  dateSelect.currentDay = today.getDate()
  dateSelect.currentMonth = today.getMonth()
  dateSelect.currentMonthName = today.toLocaleString("en", {month: "long"})
  dateSelect.currentYear = today.getFullYear()

  for (let i = 0; i < maxDay; i++) {
    let day = new Date(dateSelect.currentYear, dateSelect.currentMonth, dateSelect.currentDay + i)
    dateSelect.range.push(day)
  }
  dateSelect.buildDOM()
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildDays; });
let buildDays = function(dateSelect) {
  //Create set then populate
  let optionDaySet = new Set()
  for (let date in dateSelect.range) {

    if (dateSelect.currentMonth == dateSelect.range[date].getMonth()) {
      let dayFromSet = dateSelect.range[date].getDate()
      optionDaySet.add(dayFromSet)
    }

  }

  // loop set to create filtered options
  for (let optionDay of optionDaySet) {

    let createOption = document.createElement('option')
    let createText = document.createTextNode(optionDay)
    let select0HTML = document.getElementById('selectID1')

    createOption.setAttribute('value', optionDay)
    createOption.appendChild(createText)
    select0HTML.appendChild(createOption)

  }
  // If current year exists then set correct option
  for (let thisOption of selectID1) {
    if (dateSelect.currentDay === parseFloat(thisOption.getAttribute('value'))) {
      thisOption.setAttribute('selected', 'selected')
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildMonths; });
let buildMonths = function(dateSelect) {

      //Create sets and array
      let optionMonthSet = new Set()
      let optionMonthNameSet = new Set()
      let filteredDates = new Array
      let groupedMonthObjects = new Array

      // Filter dates to correct year
      for (let i = 0; i < dateSelect.range.length; i++) {
        if (dateSelect.range[i].getFullYear() === dateSelect.currentYear) {
          filteredDates.push(dateSelect.range[i])
        }
      }
      // Add values to sets - dedupe
      for (let month of filteredDates) {
        optionMonthSet.add(month.getMonth())
        optionMonthNameSet.add(month.toLocaleString("en", {month: "long"}))
      }
      let arrayFromSet = [...optionMonthSet]
      let arrayFromSetNamed = [...optionMonthNameSet]

      for (var i = 0; i < arrayFromSet.length; i++) {
        let month = arrayFromSet[i]
        let monthNamed = arrayFromSetNamed[i]
        let groupedObject = new Object

        groupedObject.monthNumber = month
        groupedObject.monthNamed = monthNamed
        groupedMonthObjects.push(groupedObject)
      }

      // loop set to create filtered options
      for (let optionMonth of groupedMonthObjects) {
        let createOption = document.createElement('option')
        let createText = document.createTextNode(optionMonth.monthNamed)
        let select1HTML = document.getElementById('selectID2')

        createOption.setAttribute('value', optionMonth.monthNumber)
        createOption.appendChild(createText)
        select1HTML.appendChild(createOption)
      }

      // If current year exists then set correct option
      for (let thisOption of selectID2) {
        if (dateSelect.currentMonth === parseFloat(thisOption.getAttribute('value'))) {
          thisOption.setAttribute('selected', 'selected')
        }
      }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildWrap; });
let buildWrap = function(dateSelect) {
    let createWrap = document.createElement('form')
    createWrap.setAttribute('class', 'columns')

    for (let i = 0; i < 3; i++) {

      let adjustedIndex = i + 1
      let createDiv = document.createElement('div')
      let createP = document.createElement('p')
      let createSpan = document.createElement('span')
      let createSelect = document.createElement('select')

      createDiv.setAttribute('class', 'field')
      createP.setAttribute('class', 'control column')
      createSpan.setAttribute('class', 'select')
      createSelect.setAttribute('id', 'selectID' + adjustedIndex)

      createDiv.appendChild(createP)
      createP.appendChild(createSpan)
      createSpan.appendChild(createSelect)
      createWrap.appendChild(createP)
      dateSelect.addListener(createSelect)
    }
    document.body.appendChild(createWrap)
  }


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildYears; });
let buildYears = function(dateSelect) {
  //Create set then populate
  let optionYearSet = new Set()
  for (let date in dateSelect.range) {
    let yearFromSet = dateSelect.range[date].getFullYear()
    optionYearSet.add(yearFromSet)
  }
  // loop set to create filtered options
  for (let optionYear of optionYearSet) {

    let createOption = document.createElement('option')
    let createText = document.createTextNode(optionYear)
    let select2HTML = document.getElementById('selectID3')

    createOption.setAttribute('value', optionYear)
    createOption.appendChild(createText)
    select2HTML.appendChild(createOption)

  }
  // If current year exists then set correct option
  for (let variable of selectID3) {
    if (dateSelect.currentYear === parseFloat(variable.getAttribute('value'))) {
      variable.setAttribute('selected', 'selected')
    }
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_js__ = __webpack_require__(0);
// Require static files
__webpack_require__(4);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(1);

// Import JS


// Call method
__WEBPACK_IMPORTED_MODULE_0__date_js__["a" /* dateSelect */].buildDate()


/***/ })
/******/ ]);