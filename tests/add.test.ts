import { add } from '../src/app'

test('Should add two numbers', () => {
    expect(add('1,2')).toBe(3)
})

test('Should add multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10)
})
