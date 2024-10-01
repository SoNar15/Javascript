
// We are returning JSON (Javascript object Notation) here


const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())  // Adds the middleware that extracts the body
 

function calcuteSum(counter){
    var sum = 0;
    for (var i = 0; i <= counter; i++){
        sum = sum + i;
    }
    return  sum;
} 

function calcute_mul(counter){
    var ans = 1;
    for (var i = 1; i <= counter; i++){
        ans = ans * i;
    }
    return  ans;
} 

function handlefirstRequest(req , res) {
    var counter = req.body.counter;

    var  calculatedSum = calcuteSum(counter);
    var  calculatedMul = calcute_mul(counter);

    var answerobject = {
        sum: calculatedSum,
        mul: calculatedMul,
    };
    res.status(200).send(answerobject);
    // res.json(answerobject);
    // res.json makes sure that only JSON objects are sent
    // It cannnot send text in  json format

}

// app.get('/handleSum', handlefirstRequest)
app.post('/handleSum', handlefirstRequest)


function started() {
    console.log(` Example app listening on port ${port} `);
}
app.listen(port , started)
