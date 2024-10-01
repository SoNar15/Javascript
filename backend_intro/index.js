const express = require('express')
const app = express()
const port = 3000

function handleFirstrequest(){
    res.send('Hello World!')
    var calculatedSum = calculateSum(5);
    console.log(calculatedSum);
    var result = "The sum is := " + calculatedSum;
    console.log(result);
}
app.get('/', handleFirstrequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)


function calculateSum(counter){
    var sum = 0;
    for(var i = 0; i < counter; i++){
        sum = sum + i;
    }
    return sum;

}

