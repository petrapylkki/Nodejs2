const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/api/exercise', (req, res) =>{
    res.status(200)
    res.send(req.query)
});

app.listen(port)