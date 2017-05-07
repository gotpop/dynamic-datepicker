export let buildDays = function(dateSelect) {
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
