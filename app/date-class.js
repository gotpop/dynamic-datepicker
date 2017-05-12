export default class createDateRange {

  constructor(myDate) {
    this.maxDay = 300
    this.today = myDate
    this.range = []
    this.currentDay = this.today.getDate()
    this.currentMonth = this.today.getMonth()
    this.currentMonthName = this.today.toLocaleString("en", {month: "long"})
    this.currentYear = this.today.getFullYear()
  }

  makeRange() {
    for (let i = 0; i < this.maxDay; i++) {
      let day = new Date(this.currentYear, this.currentMonth, this.currentDay + i)
      this.range.push(day)
    }
    console.log('Make range not war', this)
    this.buildDOM()
  }

  buildWrap() {
      console.log('Make range not war', this)
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
        this.addListener(createSelect)
      }
      document.body.appendChild(createWrap)
  }

  addListener(createSelect) {
      createSelect.addEventListener('change', function() {
        this.getSetCurrentDate()
        this.buildDOM()
      })
  }

  getSetCurrentDate() {
      this.currentYear = parseFloat(selectID3.options[selectID3.selectedIndex].value)
      this.currentMonth = parseFloat(selectID2.options[selectID2.selectedIndex].value)
      this.currentDay = parseFloat(selectID1.options[selectID1.selectedIndex].value)
  }

  buildYears() {

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
        if (this.currentYear === parseFloat(variable.getAttribute('value'))) {
          variable.setAttribute('selected', 'selected')
        }
      }

  }

  buildMonths() {

      //Create sets and array
      let optionMonthSet = new Set()
      let optionMonthNameSet = new Set()
      let filteredDates = new Array
      let groupedMonthObjects = new Array

      // Filter dates to correct year 666
      for (let i = 0; i < this.range.length; i++) {
        if (this.range[i].getFullYear() === this.currentYear) {
          filteredDates.push(this.range[i])
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
        if (this.currentMonth === parseFloat(thisOption.getAttribute('value'))) {
          thisOption.setAttribute('selected', 'selected')
        }
      }

    }

    buildDays() {

      //Create set then populate
      let optionDaySet = new Set()
      for (let date in this.range) {

        if (this.currentMonth == this.range[date].getMonth()) {
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
        if (this.currentDay === parseFloat(thisOption.getAttribute('value'))) {
          thisOption.setAttribute('selected', 'selected')
        }
      }

    }

    buildDOM() {
        document.body.innerHTML = ''
        this.buildWrap()
        this.buildYears()
        this.buildMonths()
        this.buildDays()
        console.log(this)
      }

}
