const express = require('express') // import express
const path = require("path");
const morgan = require('morgan')
const app = express(); // create an express servernpm install --save morgan
app.use(morgan('dev'));

const port = 3050;

// ======================= Addition ===========================

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    const add = num1 + num2;
    res.send(`${add}`)
})


// ======================= Substraction =======================

app.get('/sub/:num3/:num4', (req, res) => {
    const num3 = Number(req.params.num3);
    const num4 = Number(req.params.num4);
    const min = num3 - num4;
    res.send(`<h1 align='center'> your total of ${num3} -${num4} = <u style="color:blue;"> ${min}</u> 
</h1>`)
})

// ======================= Multipiclation ====================

app.get('/mul/:num4/:num5', (req, res) => {
    const num4 = Number(req.params.num4);
    const num5 = Number(req.params.num5);
    const multip = num4 * num5;
    res.send(`<h1 align='center'> your total of ${num4} * ${num5} = <u style="color:blue;"> ${multip}</u> 
</h1>`)
})

// ======================= Division ===========================

app.get('/div/:num6/:num7', (req, res) => {
    const num6 = Number(req.params.num6);
    const num7 = Number(req.params.num7);
    const divide = num6 / num7;
    res.send(`<h1 align='center'> your total of ${num6} / ${num7} = <u style="color:blue;"> ${divide}</u> 
</h1>`)

})

// =======================  Server Listener ======================

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})