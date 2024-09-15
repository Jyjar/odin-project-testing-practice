import { Calculator } from "../index/calculator.js";

const calculator = new Calculator();

test('add 1 + 3 to equal 4', () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test('substract 5 - 2 to euqal 3', () => {
    expect(calculator.substract(5, 2)).toBe(3);
});

test('divide 6 / 2 to euqal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('substract 5 * 2 to euqal 10', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});