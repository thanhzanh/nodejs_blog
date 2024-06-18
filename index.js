const express = require('express')
const morgan = require('morgan')
const app = express() // function tự tạo
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send(`
    
    <h1 style="color: red;">Hello World!</h1>`

  );
})

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})