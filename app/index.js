// Require static files
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./favicon.ico');
require('file-loader?name=[name].[ext]!./index.css');
require('file-loader?name=[name].[ext]!./bulma.css');

// // Import JS
// import {dateSelect} from './date.js'
//
// // Call method
// dateSelect.buildDate()


import CreateDateRange from './date-class'

import Build from './date-class'


// import {buildWrap} from './date-class'







let myDate = new Date()
let today = new Build(myDate)
today.makeRange()















// today.buildDOM()



// today.buildWrap()
// today.buildYears()
// today.buildMonths()
// today.buildDays()
//
//
// today.buildDOM()

// console.log(today)
