/////////////////////////////////////////////////
// Index
/////////////////////////////////////////////////

import './css/site.scss'
import './css/index.scss'

/////////////////////////////////////////////////
// Index
/////////////////////////////////////////////////

import DateFilter from './index.js'


document.addEventListener("DOMContentLoaded", function(event) {
  console.log('loaded');
  let view = document.getElementById('view')

  let makeDateFilter = new DateFilter().renderField()

  console.log('makeDateFilter: ', makeDateFilter)
  console.log('view: ', view)
  console.log("DOM fully loaded and parsed");
  view.appendChild(makeDateFilter)
});
