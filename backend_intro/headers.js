
// Headers

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
    console.log(req.headers);
    var counter = req.headers.counter;

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



// Output :=

//  node index_3.js
//  Example app listening on port 3000
// {
//   'user-agent': 'PostmanRuntime/7.40.0',
//   accept: '*/*',
//   'cache-control': 'no-cache',
//   'postman-token': 'f3ecd5f7-a9a2-4b18-a41b-765258416014',
//   host: 'localhost:3000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive',
//   'content-length': '0'
// }


/*
Output on POSTMAN

The Sum is := 0
*/