module.exports = function (req, res, next) {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n)|| n <= 0) {
        return res.status(400).json({error: 'n must be a positive integer'});
    }
    req.n = n;
    next();
};