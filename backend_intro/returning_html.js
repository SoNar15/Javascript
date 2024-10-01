
// We are returning HTML here


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

function givePage(req,res){
    res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    <b>
        Hi there
        Soham Narkhedkar here
    </b>
</body>`)
}

//  We can also use JSON but it shows in black background

// function givePage(req,res){
//     var answerobject = {
//         sum: 20,
//         mul: 40,
//     };
//     res.status(200).send(answerobject);
// }


// We can send whole file using :=

// function givePage(req,res){
//     res.sendFile(__dirname + "/index.html");
// }


app.get('/', givePage )

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
