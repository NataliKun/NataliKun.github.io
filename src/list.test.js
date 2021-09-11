const { emptyList } = require('./list')
const list = require('./list')

test('list <10', () => {
  const cityNameInput = { value: 'Moscow' }
  const arr2 = ['london']
  list.listnerInput(cityNameInput, arr2)
  expect(arr2).toEqual(['london', 'Moscow'])
})
test('list>10', () => {
  const cityNameInput = { value: 'Moscow' }
  const arr2 = ['london', '1', 'a', 'b', 'c', 'd', 'e', 'f', 'u', 'c']
  list.listnerInput(cityNameInput, arr2)
  expect(arr2).toEqual(['1', 'a', 'b', 'c', 'd', 'e', 'f', 'u', 'c', 'Moscow'])
})

test('emptyList создание списка', () => {
  localStorage.removeItem('cityNameInput')
  expect(emptyList()).toEqual([])
})

/* function emptyList () { // создание списка из localStorage
    try {
      return JSON.parse(localStorage.getItem('cityNameInput')) || []
    } catch (e) {
      return []
    }
  }
  */
