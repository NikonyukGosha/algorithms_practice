module.exports = function (req, res, next) {
    const n = parseInt(req.params.n, 10);
    const MAX_n = 200;

    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: "N must be greater than 0" });
    }
    if (n > MAX_n) {
        return res.status(400).json({ error: `N is too large. N must be not greater than ${MAX_n}` });
    }
    req.n = n;
    next();
};