const port = 5000;

const express = require('express')
const server = express()
let list = []
server.use('/', express.static('assets'))

server.get('/lorem', (req, res) => {
    res.send('This is GET on/')
})

server.get('/projects/add/:name', (req, res) => {
   let project = req.params.name
   list.push(project)
   res.send("OK")
})

server.get('/projects', (req, res) => {
    text = ""
    list.forEach(element => {
        text = text+`<h1>${element}</h1>`
    });
    res.send(text)
 })

 server.get('/projects/remove', (req, res) => {
   list.pop()
   res.send("Removed") 
 })

server.listen(port, () => {
    console.log(`server on port:${port}...`)
})