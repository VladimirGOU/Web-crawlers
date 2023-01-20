//Create express server 

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/test/1', (req, res) => {
    res.send('Hello World!');
  });
  