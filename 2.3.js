const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/exercise', (req, res) =>{
    res.setHeader('Content-Type', 'text/html')
    const body = JSON.stringify(req.body)
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const gender = req.body.gender
    const fruit = req.body.fruit
    const submit = req.body.submit
    
    if (req.body.hasOwnProperty('firstname')) {
        res.send("<h1>Hello from Express</h1>"+
        "<h2>POST parameters</h2>"+
        "<p>I received these parameters:" + body + "</p>"+
        "<ul><li>firstname: " + firstname +"</li>"+ 
        "<li>lastname: "+ lastname +"</li>"+
        "<li>submit: "+ submit +"</li></ul>")
    }else {
        res.send("<h1>Hello from Express</h1>"+
        "<h2>POST parameters</h2>"+
        "<p>I received these parameters:" + body + "</p>"+
        "<ul><li>fruit: " + fruit +"</li>"+ 
        "<li>gender: "+ gender +"</li>"+
        "<li>submit: "+ submit +"</li></ul>")
    }
});

app.listen(port)