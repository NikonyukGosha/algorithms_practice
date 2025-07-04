const { generateFibonacci, generateFactorials } = require('../service/mathService');

exports.getFibonacci = (req, res, next) => {
    try {
        const result = generateFibonacci(req.n);
        res.json({ result });
    } catch (err) {
        next(err);
    }
};

exports.getFactorial = (req, res, next) => {
    try {
        const result = generateFactorials(req.n);
        res.json({ result });
    } catch (err) {
        next(err);
    }
};
