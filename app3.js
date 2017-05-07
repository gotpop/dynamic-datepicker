let dateSelect = {
  range: [],
  currentDay: '',
  currentMonth: '',
  currentYear: '',
  buildDate: function() {
    let maxDay = 300
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
      createSelect.addEventListener('change', function() {

        let selectedValue2 = drop2.options[drop2.selectedIndex].value;
        dateSelect.currentYear = selectedValue2

        console.log('current: 1 ', this.currentYear)
        console.log(dateSelect)
        dateSelect.buildDOM()
        console.log('current 2: ', this.currentYear)
        // console.log('build dom', ));
        console.log(dateSelect)

      })
    }
    document.body.appendChild(createWrap)
  },
  buildYears: function() {
    console.log('current 33: ', this.currentYear)
    let optionSetYear = new Set()
    for (i in this.range) {
      let theYear = this.range[i].getFullYear()
      optionSetYear.add(theYear)
    }

    // console.log('optionSetYear: ', optionSetYear)

    for (let i of optionSetYear) {
      // console.log('i: ', i)
      let theYear = i
      let createOption = document.createElement('option')
      let createText = document.createTextNode(theYear)

      createOption.setAttribute('value', theYear)
      createOption.appendChild(createText)
      drop2.appendChild(createOption)
    }

    if (dateSelect.currentYear > 0) {
      let blabla = dateSelect.currentYear
      for (let variable of drop2) {
        if (blabla == variable.getAttribute('value')) {
          variable.setAttribute('selected', true)
          console.log('All the v: ', variable)
        }
      }
    }

    // let selectedValue2 = drop2.options[drop2.selectedIndex].value;
    // this.currentYear = selectedValue2
    // console.log('this.currentYear: ', this.currentYear)
  },
  buildMonths: function() {

    let optionSetMonth = new Set()

    for (i in this.range) {

      let theMonth = this.range[i].getMonth()
      optionSetMonth.add(theMonth)

      let theYear = this.range[i].getFullYear()

      if (theYear == this.currentYear) {

        for (let i of optionSetMonth) {
          console.log('this.currentYear: ', this.currentYear)
          let theYear = i
          let createOption = document.createElement('option')
          let createText = document.createTextNode(theYear)

          createOption.setAttribute('value', theYear)
          createOption.appendChild(createText)
          drop2.appendChild(createOption)
        }

      }
    }
    // console.log('optionSetMonth: ', optionSetMonth)
    // let strUser1 = drop1.options[drop1.selectedIndex].value
    // this.currentMonth = strUser1
    // console.log('this.currentMonth 1: ', this.currentMonth.length)
  },
  buildDays: function() {

    for (i in this.range) {

      // if (this.currentDay > 1) {
      //   let selectedValue0 = drop0.options[drop0.selectedIndex].value;
      //   this.currentDay = selectedValue0
      // }

      let theMonth = this.range[i].getMonth()
      if (theMonth == this.currentMonth) {

        // console.log('this.currentMonth: ', this.currentMonth)

        let theDate = this.range[i].getDate()
        let createOption = document.createElement('option')
        let createText = document.createTextNode(theDate)

        createOption.setAttribute('value', theDate)
        createOption.appendChild(createText)
        drop0.appendChild(createOption)

      }
    }
    let selectedValue0 = drop0.options[drop0.selectedIndex].value;
    this.currentDay = selectedValue0
    // console.log('this.currentDay: ', this.currentDay)

  },
  getSetCurrentDate: function() {},
  buildDOM: function() {
    console.log('current: 3', this.currentYear)
    document.body.innerHTML = ''
    dateSelect.buildWrap()
    dateSelect.buildYears()
    // dateSelect.buildMonths()
    // dateSelect.buildDays()
    // console.log(dateSelect)
  }
}

dateSelect.buildDate()
dateSelect.buildDOM()
