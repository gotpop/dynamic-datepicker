
/**
* Mutt Date filter
*/

'use strict'

/**
* Filter dates in Mutt
*/
export default class DateFilter  {

    constructor() {
        this.maxDay = 300
        this.today = new Date()
        this.range = []
        this.currentDay = this.today.getDate()
        this.currentMonth = this.today.getMonth()
        this.currentMonthName = this.today.toLocaleString("en", {month: "long"})
        this.currentYear = this.today.getFullYear()
        this.makeRange()
    }

    makeRange() {
      for (let i = 0; i < this.maxDay; i++) {
        let day = new Date(this.currentYear, this.currentMonth, this.currentDay + i)
        this.range.push(day)
      }
    }

    renderField() {

        let dateWrapper = document.createElement('div')
        let createYearSelect = document.createElement('select')
        let createMonthSelect = document.createElement('select')
        let createDaySelect = document.createElement('select')

        dateWrapper.setAttribute('class', 'mutt-date-selector')
        createYearSelect.setAttribute('name', 'inception_date-year')
        createMonthSelect.setAttribute('name', 'inception_date-month')
        createDaySelect.setAttribute('name', 'inception_date-day')

        dateWrapper.appendChild(createDaySelect)
        dateWrapper.appendChild(createMonthSelect)
        dateWrapper.appendChild(createYearSelect)

        function getValuesAndBuild() {
            this.setSelectedValues(createDaySelect, createMonthSelect, createYearSelect)
            this.buildYears(createYearSelect, dateWrapper)
            this.buildMonths(createMonthSelect, dateWrapper)
            this.buildDays(createDaySelect, dateWrapper)
        }

        createYearSelect.addEventListener('change', getValuesAndBuild.bind(this))
        createMonthSelect.addEventListener('change', getValuesAndBuild.bind(this))
        createDaySelect.addEventListener('change', getValuesAndBuild.bind(this))

        this.buildYears(createYearSelect, dateWrapper)
        this.buildMonths(createMonthSelect, dateWrapper)
        this.buildDays(createDaySelect, dateWrapper)

        return dateWrapper
    }

    buildYears(createYearSelect, dateWrapper) {

        // Remove old values
        while (createYearSelect.firstChild) {
            createYearSelect.removeChild(createYearSelect.firstChild);
        }

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
          createOption.setAttribute('value', optionYear)
          createOption.appendChild(createText)
          createYearSelect.appendChild(createOption)
        }

        // If current year exists then set correct option
        for (let selectOption of createYearSelect) {
            if (this.currentYear === parseFloat(selectOption.getAttribute('value'))) {
                selectOption.setAttribute('selected', 'selected')
            }
        }
        this.currentYear = parseFloat(createYearSelect.options[createYearSelect.selectedIndex].value)

    }

    buildMonths(createMonthSelect, dateWrapper) {

        // Remove old values
        while (createMonthSelect.firstChild) {
            createMonthSelect.removeChild(createMonthSelect.firstChild);
        }

        // Create sets and array
        let optionMonthSet = new Set()
        let optionMonthNameSet = new Set()
        let filteredDates = new Array
        let groupedMonthObjects = new Array

        // Filter dates to correct year
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
          createOption.setAttribute('value', optionMonth.monthNumber)
          createOption.appendChild(createText)
          createMonthSelect.appendChild(createOption)
        }

        // If current year exists then set correct option
        for (let selectOption of createMonthSelect) {
          if (this.currentMonth === parseFloat(selectOption.getAttribute('value'))) {
            selectOption.setAttribute('selected', 'selected')
          }
        }
        this.currentMonth = parseFloat(createMonthSelect.options[createMonthSelect.selectedIndex].value)

    }

    buildDays(createDaySelect, dateWrapper) {

        // Remove old values
        while (createDaySelect.firstChild) {
            createDaySelect.removeChild(createDaySelect.firstChild);
        }

        // Create set then populate
        let optionDaySet = new Set()
        // Filter days in the month
        for (let date in this.range) {
          if (this.currentMonth === this.range[date].getMonth()) {
            let dayFromSet = this.range[date].getDate()
            if (dayFromSet < 10) { dayFromSet = '0' + dayFromSet }
            optionDaySet.add(dayFromSet)
          }
        }

        // loop set to create filtered options
        for (let optionDay of optionDaySet) {
          let createOption = document.createElement('option')
          let createText = document.createTextNode(optionDay)
          createOption.setAttribute('value', optionDay)
          createOption.appendChild(createText)
          createDaySelect.appendChild(createOption)
        }

        // If current year exists then set correct option
        for (let selectOption of createDaySelect) {
          if (this.currentDay === parseFloat(selectOption.getAttribute('value'))) {
            selectOption.setAttribute('selected', 'selected')
          }
        }
        this.currentDay = parseFloat(createDaySelect.options[createDaySelect.selectedIndex].value)

    }

    setSelectedValues(createDaySelect, createMonthSelect, createYearSelect) {
        this.currentYear = parseFloat(createYearSelect.options[createYearSelect.selectedIndex].value)
        this.currentMonth = parseFloat(createMonthSelect.options[createMonthSelect.selectedIndex].value)
        this.currentDay = parseFloat(createDaySelect.options[createDaySelect.selectedIndex].value)
    }

    buildDate(createDaySelect, createMonthSelect, createYearSelect, dateWrapper) {
        this.buildDays(createDaySelect, dateWrapper)
        this.buildMonths(createMonthSelect, dateWrapper)
        this.buildYears(createYearSelect, dateWrapper)
    }

}
