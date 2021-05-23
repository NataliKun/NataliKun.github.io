const one = require('./module_1')

test('return one', () => {
  expect(one.one()).toBe(1)
})
