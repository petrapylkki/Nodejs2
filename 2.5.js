const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('Hello'))

app.get('/hello', (req, res) => {
    res.sendFile(__dirname+'/hello/index.html')
})

app.get('/api', (req, res) =>{
    res.status(200)
    res.send({msg: 'Hello, World!'})
});

app.listen(port)