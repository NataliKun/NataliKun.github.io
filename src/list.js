const weather = require('./weather')
const input = document.querySelector('#input')

let arrInput = []

function onStart () {
  document.querySelector('#button').addEventListener('click', click)
  arrInput = emptyList()
  createList(arrInput)
}

function click () {
  listnerInput(input, arrInput)
  createList(arrInput)
  weather.weatherHistory(input.value)
}

function listnerInput (cityNameInput, arr2) { //  input добавляе в localStorage
  arr2.push(cityNameInput.value)
  if (arr2.length > 10) {
    arr2.shift()
  }

  localStorage.setItem('cityNameInput', JSON.stringify(arr2))
}

function emptyList () { // создание списка из localStorage
  try {
    return JSON.parse(localStorage.getItem('cityNameInput')) || []
  } catch (e) {
    return []
  }
}

function createList (arr3) { // заполнение списка
  const p = document.createElement('p')
  p.id = 'list'
  for (let i = 0; i < arr3.length; i++) {
    const p2 = document.createElement('p')
    p2.append(arr3[i])
    p2.onclick = () => { weather.weatherHistory(arr3[i]) }
    p.append(p2)
  }
  document.querySelector('#list').replaceWith(p)
}

module.exports = {
  listnerInput: listnerInput,
  createList: createList,
  emptyList: emptyList,
  onStart: onStart
}
