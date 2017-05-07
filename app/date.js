import { buildDate } from './components/build-date.js'
import { buildWrap } from './components/build-wrap.js'
import { buildDays } from './components/build-days.js'
import { buildMonths } from './components/build-months.js'
import { buildYears } from './components/build-years.js'

export let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    buildDate(dateSelect)
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
