// const fs = require('fs');

// fs.writeFileSync("info.txt", "Test text!!")

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})

let port = 3001
app.listen(port, () => {
    console.log(`Server is running: http://locslhost:${port}`)
})
