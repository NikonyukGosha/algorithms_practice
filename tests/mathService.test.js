const { generateFibonacci, generateFactorials } = require("../service/mathService");


test('Generate Fibonacci', () => {
    expect(generateFibonacci(5)).toStrictEqual([0, 1, 1, 2, 3]);
});

test('Generate Factorials', () => {
    expect(generateFactorials(5)).toStrictEqual([1, 1, 2, 6, 24]);
});