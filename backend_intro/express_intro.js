/*

Express package is used for simplifying http servers

*/

const express = require('express')
const app = express()
const port = 3000

function calcuteSum(n){
    var sum = 0;
    for (var i = 0; i < n; i++){
        sum = sum + i;
    }
    return  sum;
} 


function handlefirstRequest(req,res){
    var  calculatedSum = calcuteSum(10);
    var  answer = "The sum is := " + calculatedSum;
    res.send(answer)
}

app.get('/', handlefirstRequest)

// We can  use multiple routes :=

// app.get('/handleSum', handlefirstRequest)
// app.get('/handleSum2', handlefirstRequest)
// app.get('/handleSum30', handlefirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port , started)


/*
To  kill  a process :=

1) open command promt as an administrator
2) netstat -ano | findstr :3000
3) note  PID value (Listening : PID )
4) taskkill /PID <PID> /F
5) Success

*/