const { generateFibonacci, generateFactorials } = require('../service/mathService');

describe('generateFibonacci', () => {
    test('returns correct sequence for n=5', () => {
        expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('returns [0] for n = 1', () => {
        expect(generateFibonacci(1)).toEqual([0]);
    });

    test('returns [] for n = 0', () => {
        expect(generateFibonacci(0)).toEqual([]);
    });

    test('returns [] for negative n', () => {
        expect(generateFibonacci(-5)).toEqual([]);
    });
});

describe('generateFactorials', () => {
    test('returns correct sequence for n=5', () => {
        expect(generateFactorials(5)).toEqual([1, 1, 2, 6, 24]);
    });

    test('returns [] for n=0', () => {
        expect(generateFactorials(0)).toEqual([]);
    });

    test('returns correct for n=1', () => {
        expect(generateFactorials(1)).toEqual([1]);
    });

    test('handles large n within safe limit', () => {
        const result = generateFactorials(20);
        expect(result.length).toBe(20);
    });
});