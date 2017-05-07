let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    let maxDay = 32
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    let date = today.getDate()
// console.log(today.getDate());
    this.currentDay = date
    this.currentMonth = month
    this.currentYear = year
    console.log(  this.currentDay)
    console.log(  this.currentMonth)
    console.log(  this.currentYear)

    for (let i = 0; i < maxDay; i++) {
      let day = new Date(year, month, date + i)
      this.range.push(day)
    }
    console.log(this.range);
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
    console.log('sel', dateSelect.currentMonth)
    dateSelect.currentDay = selectID1.options[selectID1.selectedIndex].value
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

    //Create set then populate
    let optionMonthSet = new Set()
    for ( let date in this.range) {
      if (dateSelect.currentYear == dateSelect.range[date].getFullYear() ) {
        let monthFromSet = this.range[date].getMonth()
        optionMonthSet.add(monthFromSet)
        console.log('monthFromSet: ', monthFromSet)
      }
    }

    // loop set to create filtered options
    for (let optionMonth of optionMonthSet) {

      let createOption = document.createElement('option')
      let createText = document.createTextNode(optionMonth)
      let select1HTML = document.getElementById('selectID2')

      createOption.setAttribute('value', optionMonth)
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
    for ( let date in this.range) {

      if (dateSelect.currentMonth == dateSelect.range[date].getMonth() ) {
        let dayFromSet = this.range[date].getDate()
        optionDaySet.add(dayFromSet)
        console.log('dayFromSet: ', dayFromSet)
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
    console.log('cm: ', dateSelect.currentMonth)
    dateSelect.buildDays()
  }
}

dateSelect.buildDate()
