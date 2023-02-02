const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('https://api.astronauts.id/api/product/location/0?pageSize=21&pageIndex=0&categoryId=555&fbuyable=true, sdsdsd')
})

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
})