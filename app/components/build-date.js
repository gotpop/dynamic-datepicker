export let buildDate = function(dateSelect) {
  let maxDay = 300
  let today = new Date()
  dateSelect.currentDay = today.getDate()
  dateSelect.currentMonth = today.getMonth()
  dateSelect.currentMonthName = today.toLocaleString("en", {month: "long"})
  dateSelect.currentYear = today.getFullYear()

  for (let i = 0; i < maxDay; i++) {
    let day = new Date(dateSelect.currentYear, dateSelect.currentMonth, dateSelect.currentDay + i)
    dateSelect.range.push(day)
  }
  dateSelect.buildDOM()
}
