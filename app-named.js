let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentMonthName: '',
  currentYear: '',
  buildDate: function() {
    let maxDay = 30
    let today = new Date()
    this.currentDay = today.getDate()
    this.currentMonth = today.getMonth()
    this.currentMonthName = today.toLocaleString("en", { month: "long"  })
    this.currentYear = today.getFullYear()

    for (let i = 0; i < maxDay; i++) {
      let day = new Date(this.currentYear, this.currentMonth, this.currentDay + i)
      this.range.push(day)
    }
    // console.log(this.range)
    console.log(dateSelect)
    dateSelect.buildDOM()
  },
  buildWrap: function() {

    let createWrap = document.createElement('form')
    createWrap.setAttribute('id', 'wrap')

    for (let i = 0; i < 3; i++) {
      let adjustedIndex = i + 1
      let createSelect = document.createElement('select')
      createSelect.setAttribute('id', 'selectID' + adjustedIndex)
      createWrap.appendChild(createSelect)
      dateSelect.addListener(createSelect)
    }
    document.body.appendChild(createWrap)
  },
  addListener: function(createSelect) {
    createSelect.addEventListener('change', function() {
      dateSelect.getSetCurrentDate()
      dateSelect.buildDOM()
      console.log(dateSelect)
    })
  },
  getSetCurrentDate: function() {
    dateSelect.currentYear = selectID3.options[selectID3.selectedIndex].value
    dateSelect.currentMonth = selectID2.options[selectID2.selectedIndex].value
    dateSelect.currentMonthNamed = selectID2.options[selectID2.selectedIndex].text
    console.log(selectID2.options[selectID2.selectedIndex].text, 'testy')
    dateSelect.currentDay = selectID1.options[selectID1.selectedIndex].value
  },
  buildYears: function() {

    //Create set then populate
    let optionYearSet = new Set()
    for (let date in this.range) {
      let yearFromSet = this.range[date].getFullYear()
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
      if (dateSelect.currentYear == variable.getAttribute('value')) {
        variable.setAttribute('selected', 'selected')
      }
    }

  },
  buildMonths: function() {

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
        optionMonthNameSet.add(month.toLocaleString("en", { month: "long"  }))
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

    console.log(groupedMonthObjects, 'groupedMonthObjects')

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
      if (dateSelect.currentMonth == thisOption.getAttribute('value')) {
        thisOption.setAttribute('selected', 'selected')
      }
    }

  },
  buildDays: function() {

    //Create set then populate
    let optionDaySet = new Set()
    for (let date in this.range) {

console.log(dateSelect.currentMonthNamed, 'named')

      if (dateSelect.currentMonth == dateSelect.range[date].getMonth()) {
        let dayFromSet = this.range[date].getDate()
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
      if (dateSelect.currentDay == thisOption.getAttribute('value')) {
        thisOption.setAttribute('selected', 'selected')
      }
    }

  },
  buildDOM: function() {
    document.body.innerHTML = ''
    dateSelect.buildWrap()
    dateSelect.buildYears()
    dateSelect.buildMonths()
    dateSelect.buildDays()
    console.log(dateSelect)
  }
}

dateSelect.buildDate()
