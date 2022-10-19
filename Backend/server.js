const express = require('express');
const userRoutes = require('./src/info/routes');
const app = express();
const port = 3001;

app.use(express.json())

app.use('/api', userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`))
