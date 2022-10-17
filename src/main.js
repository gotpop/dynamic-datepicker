import DateFilter from './index.js'

document.addEventListener("DOMContentLoaded", () => {
  const view = document.getElementById('view')
  const makeDateFilter = new DateFilter().renderField()

  view.appendChild(makeDateFilter)
})
