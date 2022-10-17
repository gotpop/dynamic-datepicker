import DateFilter from './index.js'

document.addEventListener("DOMContentLoaded", function(event) {

  let view = document.getElementById('view')
  let makeDateFilter = new DateFilter().renderField()

  view.appendChild(makeDateFilter)

})
