// Require static files
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./favicon.ico');
require('file-loader?name=[name].[ext]!./index.css');
require('file-loader?name=[name].[ext]!./bulma.css');

// Import JS
import {dateSelect} from './date.js'

// Call method
dateSelect.buildDate()
