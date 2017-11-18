const express = require('express') // import express
const path = require("path");
const morgan = require('morgan')
const app = express(); // create an express servernpm install --save morgan
app.use(morgan('dev'));

const port = 8080;

const inputs = ["Rock", "Paper", "Scissors"];

app.get('/rock', (req, res) => {
        if (inputs[0] === "Rock") {
            res.send(`<h1 align=center>  Dude I bet you on this, Haha:   <p style="color:orange;">${inputs[1]}</p>
            </h1>`)        } 
})

app.get('/paper', (req, res) => {
    if (inputs[1] === "Paper") {
        res.send(`<h1 align=center>  Dude I bet you on this, Haha:   <p style="color:lightblue;">${inputs[2]}</p>
        </h1>`)    } 
})

app.get('/scissors', (req, res) => {
    if (inputs[2] === "Scissors") {
        res.send(`<h1 align=center>  Dude I bet you on this, Haha:   <p style="color:blue;">${inputs[0]}</p>
        </h1>`)
    } 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/:name', (req, res) => {
    res.send(`<h1 align='center'> Type "rock", "paper","scissors" and not <u style="color:blue;"> ${req.params.name}</u></h1>`)
  })