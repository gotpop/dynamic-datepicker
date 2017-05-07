export let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    let maxDay = 300
    let today = new Date()
    this.currentDay = today.getDate()
    this.currentMonth = today.getMonth()
    this.currentMonthName = today.toLocaleString("en", {month: "long"})
    this.currentYear = today.getFullYear()

    for (let i = 0; i < maxDay; i++) {
      let day = new Date(this.currentYear, this.currentMonth, this.currentDay + i)
      this.range.push(day)
    }

    console.log(dateSelect)
    this.buildDOM()
  },
  buildWrap: function() {
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
  },
  addListener: function(createSelect) {
    createSelect.addEventListener('change', function() {
      dateSelect.getSetCurrentDate()
      dateSelect.buildDOM()
      console.log(dateSelect)
    })
  },
  getSetCurrentDate: function() {
    this.currentYear = parseFloat(selectID3.options[selectID3.selectedIndex].value)
    console.log('this.currentYear', this.currentYear);
    this.currentMonth = parseFloat(selectID2.options[selectID2.selectedIndex].value)
    this.currentDay = parseFloat(selectID1.options[selectID1.selectedIndex].value)
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
      if (dateSelect.currentYear === parseFloat(variable.getAttribute('value'))) {
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
        console.log('Date range', dateSelect.currentYear)
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

  },
  buildDays: function() {

    //Create set then populate
    let optionDaySet = new Set()
    for (let date in this.range) {

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
      if (dateSelect.currentDay === parseFloat(thisOption.getAttribute('value'))) {
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

// dateSelect.buildDate()
