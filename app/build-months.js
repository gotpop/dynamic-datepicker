export let buildMonths = function(dateSelect) {

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
