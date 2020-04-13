const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/login", (req, res) => {
    const user = req.body.user
    const pwd = req.body.pwd
    if(user == "" || pwd =="") {
        res.status(400).send("400 Bad Request<br>Username or password missing")
    }
    else if(user == "mark" && pwd == "giraffe"){
        res.status(200).send({user: user})
    } else {
        res.status(403).send("403 Forbidden")
    }
})

app.listen(port)