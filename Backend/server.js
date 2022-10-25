const express = require('express');
const userRoutes = require('./src/info/routes');
const app = express();
const port = 3000;

app.use(express.json())

app.use('/api', userRoutes);

app.use('/', (req, res, next) => {
    res.status(404).json({
        errorMessage: "No endpoint found"
    })
})

app.listen(port, () => console.log(`app listening on port ${port}`))
