
/* 
Using Query params(Counter) , headers , body 
To take input in the route  from end user
*/

// 1) Using Query Params ( Counter )

// Method to do in url -> localhost:3000/handleSum?counter=x
// x is any input the user gives
// We can also  give multiple inputs ->
// localhost:3000/handleSum?counter=x&counter2=50&counter3=100

const express = require('express')
const app = express()
const port = 3000

function calcuteSum(n){
    var sum = 0;
    for (var i = 0; i <= n; i++){
        sum = sum + i;
    }
    return  sum;
} 

function handlefirstRequest(req , res) {
    var counter = req.query.counter;
//  console.log(req.query.counter2)
//  console.log(req.query.counter3)
//  It prints values of counter2 ,  counter3 taken as inputs

    var calculatedSum = calcuteSum(counter);
    var answer = "The Sum is := " + calculatedSum;
    res.send(answer);
}

function createUser(req , res){
    res.send("Hello World");
}

app.get('/handleSum', handlefirstRequest)
app.post('/createUser', createUser) 
// OUTPUT of createUser rounte on   URL ->
// Cannot GET /createUser
// Because it wants GET request and we have implemented POST request

// POST request can be seen in POSTMAN
// URL in a Brouser is by default a GET request

function started() {
    console.log(` Example app listening on port ${port} `);
}
app.listen(port , started)