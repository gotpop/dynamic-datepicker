let dateSelect = {
    range: [],
    rangeNoDupe: [],
    today: new Date(),
    dynamicDateSets: {},
    dynamicDateArrays: {},
    maxDay: 30,
    daysSet: new Set(),
    monthsSet: new Set(),
    yearsSet: new Set(),
    dropDayValue: '',
    dropMonthValue: '',
    dropYearValue: '',
    daysArray: '',
    monthsArray: '',
    yearsArray: '',
    currentDay: '',
    currentMonth: '',
    currentYear: '',
    buildDate: function() {
        let year = this.today.getFullYear()
        let month = this.today.getMonth()
        let date = this.today.getDate()

        for (let i = 0; i < this.maxDay; i++) {
            let day = new Date(year, month + 1, date + i)
            this.range.push(day)
        }
    },
    buildRange: function() {
        for (let i in this.range) {
            let thisDay = this.range[i].getDate()
            let thisMonth = this.range[i].getMonth()
            let thisYear = this.range[i].getFullYear()
            this.daysSet.add(thisDay)
            this.monthsSet.add(thisMonth)
            this.yearsSet.add(thisYear)
        }
    },
    buildObject: function() {

        this.buildDate()
        this.buildRange()



        for (let dayObject of this.range) {

            this.rangeNoDupe.push(dayObject)

        }
        console.log('this.dynamicDateSets', this.dynamicDateSets)
        console.log('this.dynamicDateArrays', this.dynamicDateArrays)
    },
    buildWrap: function() {
        let createWrap = document.createElement('div')
        createWrap.setAttribute('id', 'wrap')

        for (let i = 0; i < 3; i++) {
            let createSelect = document.createElement('select')
            createSelect.setAttribute('id', 'drop' + i)
            createWrap.appendChild(createSelect)
            // console.log('This is', createSelect)
            createSelect.addEventListener('change', function() {
                console.log('DOM changed')
                this.dropMonthValue = "hello"
                console.log('dropMonthValue: ', this.dropMonthValue)
                this.buildDOM()

            })
        }
        document.body.appendChild(createWrap)
    },
    buildYears: function() {
          for (i in this.range) {

            let theYear = this.range[i].getFullYear()
            let createOption = document.createElement('option')
            let createText = document.createTextNode(theYear)

            createOption.setAttribute('value', theYear)
            createOption.appendChild(createText)
            drop2.appendChild(createOption)

        }
        let strUser = drop2.options[drop2.selectedIndex].value;
        this.currentYear = strUser
        console.log('this.currentYear: ', this.currentYear)
    },
    buildMonths: function() {
      for (i in this.range) {

        let theYear = this.range[i].getFullYear()

        if ( theYear == this.currentYear) {

          let theMonth = this.range[i].getMonth()
          let createOption = document.createElement('option')
          let createText = document.createTextNode(theMonth)

          createOption.setAttribute('value', theMonth)
          createOption.appendChild(createText)
          drop1.appendChild(createOption)

        }
      }
      let strUser1 = drop1.options[drop1.selectedIndex].value
      this.currentMonth = strUser1
      console.log('this.currentMonth: ', this.currentMonth)
    },
    buildDays: function() {

      for (i in this.range) {

        let theMonth = this.range[i].getMonth()

        if ( theMonth == this.currentMonth) {

          let theDate = this.range[i].getDate()
          let createOption = document.createElement('option')
          let createText = document.createTextNode(theDate)

          createOption.setAttribute('value', theDate)
          createOption.appendChild(createText)
          drop0.appendChild(createOption)

        }
      }
      let strUser0 = drop0.options[drop0.selectedIndex].value;
      this.currentDay = strUser0
      console.log('this.currentDay: ', this.currentDay)

    },
    buildDOM: function() {
        document.body.innerHTML = ''
        this.buildWrap()
        this.buildYears()
        this.buildMonths()
        this.buildDays()
    }
}

dateSelect.buildObject()
console.log('Range', dateSelect.range)
console.log('dateSelect: ', dateSelect);
dateSelect.buildDOM()
