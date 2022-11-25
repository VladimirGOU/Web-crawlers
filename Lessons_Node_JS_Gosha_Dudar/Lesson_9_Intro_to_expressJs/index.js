const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is home page')
})

app.get('/user/:username/:id', (req, res) => {
    res.send(`User Id: ${req.params.id}. Username: ${req.params.username}`)
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})