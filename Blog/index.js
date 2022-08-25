const express = require('express')
const app = express()
const port = 3000

app.get('/abc', (req, res) => {
  var a =1;
  var b = 5;
  var c =a+b;
  res.send('Hello World huyhue!')
})

app.listen(port, () => {
  console.log(`Example app listening huyhue on port ${port}`)
})