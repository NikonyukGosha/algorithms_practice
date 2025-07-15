function generateFibonacci(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function generateFactorials(n){
    if (n <= 0) return [];
    const result = [1n];
    for (let i = 1n; i < BigInt(n); i++) {
        result.push(result[result.length - 1] * i);
    }
    return result.map(Number);
}

module.exports = {
    generateFibonacci,
    generateFactorials,
}