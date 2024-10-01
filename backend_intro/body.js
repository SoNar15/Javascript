//  Body

//  Not given in-built in express

//  POSTMAN
//  similar to javascript objects

// {
//     "name": "soham",
//     "age": 20,
//     "counter": 100
// }

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
    console.log(req.body);           
    // O/P of req.body is undefined if body-parser middleware is not used.
    var counter = req.body.counter;

    var calculatedSum = calcuteSum(counter);
    var answer = "The Sum is := " + calculatedSum;
    res.send(answer);
}

// app.get('/handleSum', handlefirstRequest)
app.post('/handleSum', handlefirstRequest)


function started() {
    console.log(` Example app listening on port ${port} `);
}
app.listen(port , started)


// OUTPUT

// node body.js
// Example app listening on port 3000
// { name: 'soham', age: 20, counter: 100 }
// { name: 'soham', age: 20, counter: 50 }

