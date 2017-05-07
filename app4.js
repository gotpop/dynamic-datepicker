let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    let maxDay = 40
    let today = new Date()
    // today.setDate(2017, 12, 0)
    let year = today.getFullYear()
    let month = today.getMonth()
    let date = today.getDate()

    for (let i = 0; i < maxDay; i++) {
      let day = new Date(year, month + 1, date + i)
      this.range.push(day)
    }
  },
  buildWrap: function() {

    let createWrap = document.createElement('div')
    createWrap.setAttribute('id', 'wrap')

    for (let i = 0; i < 3; i++) {
      let createSelect = document.createElement('select')
      createSelect.setAttribute('id', 'drop' + i)
      createWrap.appendChild(createSelect)
      dateSelect.addListener()
    }
    document.body.appendChild(createWrap)
  },
  addListener: function() {
    createSelect.addEventListener('change', function() {
      dateSelect.getSetCurrentDate()
      dateSelect.buildDOM()
      console.log(dateSelect)
    })
  },
  getSetCurrentDate: function() {
    let selectedValue2 = drop2.options[drop2.selectedIndex].value;
    dateSelect.currentYear = selectedValue2

    let selectedValue1 = drop1.options[drop1.selectedIndex].value;
    dateSelect.currentMonth = selectedValue1

    let selectedValue0 = drop0.options[drop0.selectedIndex].value;
    dateSelect.currentDay = selectedValue0

    console.log('current: 1 ', this.currentYear)
  },
  buildYears: function() {

    //Create set then populate
    let optionYearSet = new Set()
    for ( let date in this.range) {

      let yearFromSet = this.range[date].getFullYear()
      optionYearSet.add(yearFromSet)

    }
    // loop set to create filtered options
    for (let optionYear of optionYearSet) {

      let createOption = document.createElement('option')
      let createText = document.createTextNode(optionYear)
      let select2HTML = document.getElementById('drop2')

      createOption.setAttribute('value', optionYear)
      createOption.appendChild(createText)
      select2HTML.appendChild(createOption)

    }
    // If current year exists then set correct option
    if (dateSelect.currentYear > 0) {

      for (let variable of drop2) {
        if (dateSelect.currentYear == variable.getAttribute('value')) {
          variable.setAttribute('selected', 'selected')
        }
      }

    }

  },
  buildMonths: function() {

    //Create set then populate
    let optionMonthSet = new Set()
    for ( let date in this.range) {

      let monthFromSet = this.range[date].getMonth()
      optionMonthSet.add(monthFromSet)

    }

    // loop set to create filtered options
    for (let optionMonth of optionMonthSet) {

      let createOption = document.createElement('option')
      let createText = document.createTextNode(optionMonth)
      let select1HTML = document.getElementById('drop1')

      createOption.setAttribute('value', optionMonth)
      createOption.appendChild(createText)
      select1HTML.appendChild(createOption)

    }
    // If current year exists then set correct option
    if (dateSelect.currentMonth > 0) {

      for (let thisOption of drop1) {

        if (dateSelect.currentMonth == thisOption.getAttribute('value')) {
          thisOption.setAttribute('selected', 'selected')
          console.log('Months option log: ', thisOption)
        }

      }
    }

  },
  buildDays: function() {

    //Create set then populate
    let optionDaySet = new Set()
    for ( let date in this.range) {
      let dayFromSet = this.range[date].getDate()
      optionDaySet.add(dayFromSet)
    }

    // loop set to create filtered options
    for (let optionDay of optionDaySet) {

      let createOption = document.createElement('option')
      let createText = document.createTextNode(optionDay)
      let select0HTML = document.getElementById('drop0')

      createOption.setAttribute('value', optionDay)
      createOption.appendChild(createText)
      select0HTML.appendChild(createOption)

    }
    // If current year exists then set correct option
    if (dateSelect.currentDay > 0) {

      for (let thisOption of drop0) {
        if (dateSelect.currentDay == thisOption.getAttribute('value')) {
          thisOption.setAttribute('selected', 'selected')
        }
      }

    }

  },
  buildDOM: function() {
    console.log('current: 3', this.currentYear)
    document.body.innerHTML = ''
    dateSelect.buildWrap()
    dateSelect.buildYears()
    dateSelect.buildMonths()
    dateSelect.buildDays()
    // console.log(dateSelect)
  }
}

dateSelect.buildDate()
dateSelect.buildDOM()
