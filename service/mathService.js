function generateFibonacci(n){
    if (n===1){
        return [0];
    }
    const sequence = [0, 1];
    for(let i = 2; i < n; i++){
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function generateFactorials(n){
    const result = [1];
    for(let i = 1; i < n; i++){
        result.push(result[i - 1] * i);
    }
    return result;
}

module.exports = {
    generateFibonacci,
    generateFactorials,
}