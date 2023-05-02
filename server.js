const express = require('express')
const server = express()

server.set(`view engine`, `ejs`)
server.get(`/`, (req, res) => {

})
server.use(express.static('public'))

server.listen(3000)