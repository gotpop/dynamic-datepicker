export let buildYears = function(dateSelect) {
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
