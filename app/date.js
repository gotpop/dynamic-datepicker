import { buildWrap } from './build-wrap.js'
import { buildDays } from './build-days.js'
import { buildMonths } from './build-months.js'
import { buildYears } from './build-years.js'

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
    this.buildDOM()
  },
  addListener: function(createSelect) {
    createSelect.addEventListener('change', function() {
      dateSelect.getSetCurrentDate()
      dateSelect.buildDOM()
    })
  },
  getSetCurrentDate: function() {
    this.currentYear = parseFloat(selectID3.options[selectID3.selectedIndex].value)
    this.currentMonth = parseFloat(selectID2.options[selectID2.selectedIndex].value)
    this.currentDay = parseFloat(selectID1.options[selectID1.selectedIndex].value)
  },
  buildDOM: function() {
    document.body.innerHTML = ''
    buildWrap(dateSelect)
    buildYears(dateSelect)
    buildMonths(dateSelect)
    buildDays(dateSelect)
    console.log(dateSelect)
  }
}
