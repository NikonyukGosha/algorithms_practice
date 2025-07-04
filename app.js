const express = require('express');
const cors = require('cors');
const mathRoutes = require('./routes/mathRoute');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/math', mathRoutes);

app.use((err, req, res, next)=>{
    res.status(400).json({error: err.message});
})

module.exports = app;