const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;
const api = require("./routes/api.js")

app.get('/', (req, res) => {
    res.send('UI Soon');
});

app.use('/api',api)
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});