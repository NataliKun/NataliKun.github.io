const weather = require('./weather')

const button = document.querySelector('#button')
const input = document.querySelector('#input')

let arrInput = []

button.addEventListener('click', click)


emptyList()

function click () {
  listnerInput(input)
  createList()
  weather.weatherHistory(input.value)
}


function listnerInput (cityNameInput) { //  input добавляе в localStorage
  arrInput.push(cityNameInput.value)
  if (arrInput.length > 10) {
    arrInput.shift()
  }

  localStorage.setItem('cityNameInput', JSON.stringify(arrInput))
}

function emptyList () { // создание списка из localStorage
  try {
    arrInput = JSON.parse(localStorage.getItem('cityNameInput')) || []
  } catch (e) {
    arrInput = []
  }

  createList()
}

function createList () { // заполнение списка
  const p = document.createElement('p')
  p.id = 'list'
  for (let i = 0; i < arrInput.length; i++) {
    const p2 = document.createElement('p')
    p2.append(arrInput[i])
    p2.onclick = () => {weather.weatherHistory(arrInput[i])}
    p.append(p2)
  }
  document.querySelector('#list').replaceWith(p)
}
