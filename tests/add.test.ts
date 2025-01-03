import { add } from '../src/app'

test('Should add two numbers', () => {
    expect(add('1,2')).toBe(3)
})

test('Should add multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10)
})

test('Should add two numbers with \n', () => {
    expect(add('1\n2,3')).toBe(6)
})

test('Should add two numbers with custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3)
})

test('Should add two numbers with different delimiters', () => {
    expect(add('//;\n1;2,1\n1')).toBe(5)
})

test('Should not allow negative numbers', () => {
    const e = 'Negative numbers not allowed -1, -3'
    expect(() => add('//;\n-1;2;-3')).toThrow(e)
})