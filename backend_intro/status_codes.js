
//  We are returning simple text here


const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())  // Adds the middleware that extracts the body
 

function calcuteSum(n){
    var sum = 0;
    for (var i = 0; i <= n; i++){
        sum = sum + i;
    }
    return  sum;
} 

function handlefirstRequest(req , res) {
    var counter = req.body.counter;

    if(counter>10000){
        var calculatedSum = calcuteSum(counter);
        var answer = "The Sum is := " + calculatedSum;
        res.send(answer);
    }else{
        res.status(411).send("You  have sent very big number");
    }
    }

// app.get('/handleSum', handlefirstRequest)
app.post('/handleSum', handlefirstRequest)


function started() {
    console.log(` Example app listening on port ${port} `);
}
app.listen(port , started)
