let dateSelect = {
    range: [],
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

        this.daysArray = Array.from([...this.daysSet])
        this.monthsArray = Array.from([...this.monthsSet])
        this.yearsArray = Array.from([...this.yearsSet])

        this.dynamicDateSets.years = new Object
        this.dynamicDateSets.months = new Object
        this.dynamicDateSets.days = new Set()

        this.dynamicDateArrays.years = new Object
        this.dynamicDateArrays.months = new Object
        this.dynamicDateArrays.days = new Array

        for (let yearObject of this.yearsArray) {
            this.dynamicDateSets.months[yearObject] = new Set()
            this.dynamicDateArrays.months[yearObject] = new Array
        }
        this.dynamicDateArrays.years[`allYears`] = this.yearsArray

        for (let dayObject of this.range) {
            for (let yearObject of this.yearsArray) {
                if (dayObject.getFullYear() === yearObject) {

                    let createDynamicProperty = this.dynamicDateSets.months[yearObject]
                    this.dynamicDateSets.months[yearObject].add(dayObject.getMonth())

                    // let createArrayFromSet = Array.from([...createDynamicProperty])
                    // this.dynamicDateArrays.months[yearObject] = createArrayFromSet

                }
            }
            this.dynamicDateSets.days.add(dayObject.getDate())

            //////////////////////////////////////////////
            // Day object
            //////////////////////////////////////////////

            for (let monthObject of this.monthsArray) {
                if (dayObject.getMonth() === monthObject) {

                    let createDynamicProperty = this.dynamicDateSets.days[monthObject]
                    this.dynamicDateSets.days.add(dayObject.getDate())

                    let newObject = new Object
                    // newObject.date = createArrayFromSet
                    newObject.thisIsInMonth = monthObject
                    // console.log('createArrayFromSet: ', createArrayFromSet)
                    this.dynamicDateArrays.days.push(newObject)

                }
            }
            for (let daysObject of this.dynamicDateSets.days) {
              if (dayObject.getDate() === daysObject) {

              }
            }


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
        for (let i of this.dynamicDateArrays.years.allYears) {
            let createOption = document.createElement('option')
            createOption.setAttribute('value', i)
            let createText = document.createTextNode(i)
            createOption.appendChild(createText)
            drop2.appendChild(createOption)
            this.currentYear = i
            console.log('currentYear: ', this.currentYear)
        }
    },
    buildMonths: function() {
        for (let yearIndex in this.dynamicDateArrays.months) {
            if (yearIndex == this.dynamicDateArrays.years.allYears[0]) {
                for (i of this.dynamicDateArrays.months[yearIndex]) {
                    let createOption = document.createElement('option')
                    createOption.setAttribute('value', i)
                    let createText = document.createTextNode(i)
                    createOption.appendChild(createText)
                    drop1.appendChild(createOption)
                    this.currentMonth = i
                    console.log('currentMonth: ', this.currentMonth)
                }
            }
        }
    },
    buildDays: function() {

        for (i of this.dynamicDateArrays.days) {
          if (i.thisIsInMonth == this.currentMonth) {
            // if (i == 1) {
            //   this.currentDay = i
            // }
            console.log('currentDay!: ', i)
            let createOption = document.createElement('option')
            let createText = document.createTextNode(i)
            createOption.appendChild(createText)
            drop0.appendChild(createOption)
          }
        }

    },
    // getCurrentValues: function(currentValue) {
    //   let htmlOption0 = document.getElementById('drop0').firstChild
    //   let htmlOptionValue0 = htmlOption0.getAttribute('value')
    //
    //   this.currentDay = htmlOptionValue0
    //
    //   let htmlOption1 = document.getElementById('drop1').firstChild
    //   let htmlOptionValue1 = htmlOption1.getAttribute('value')
    //
    //   this.currentMonth = htmlOptionValue1
    //
    //   let htmlOption2 = document.getElementById('drop2').firstChild
    //   let htmlOptionValue2 = htmlOption2.getAttribute('value')
    //
    //   this.currentYear = htmlOptionValue2
    //
    // },
    buildDOM: function() {
        document.body.innerHTML = ''
        this.buildWrap()
        this.buildYears()
        this.buildMonths()
        this.buildDays()
        // this.getCurrentValues()
        // console.log('Built range!', this.range)

    }
}

dateSelect.buildObject()
dateSelect.buildDOM()
