export let buildWrap = function(dateSelect) {
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
      dateSelect.addListener(createSelect)
    }
    document.body.appendChild(createWrap)
  }
