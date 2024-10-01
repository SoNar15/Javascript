console.log ("Welcome to Middelwares in JS");

// Middleware is  a function
// Used for authentication mostly
// Capture requests before reaching express server.
// Only after getting next() in iddelware the control reaches express server 

const express = require ('express');
const app = express();
const port  = 3000;


function midddlewar1(req,res,next){
  console.log("From inside middleware" + req.headers.counter);
  next();
}
function midddlewar1(req,res,next){
    console.log("From inside middleware" + req.headers.counter);
    res.send("Error from middleware");
}
// Hence taking requests , sending response can also be done by mmiddleware
//  as it has access to req, res parameters


// function midddlewar1(req,res,next){
//     console.log("From inside middleware" + req.headers.counter);
//     res.send("Error from middleware");
//     next();
// }
// Both res.send  an next() cannot be don simultaneously
// as it calls 2 send res which is not allowed. 


app.use(midddlewar1); // registering a middleware


function calculateSum(counter){
    var sum = 0;;
    for(var i = 0; i <counter; i++){
        sum = sum +i;
    }
    return sum;
}

function handlefirstRequest(req , res) {
    console.log(req.headers);
    var counter = req.headers.counter;

    var calculatedSum = calculateSum(counter);
    var answer = "The Sum is := " + calculatedSum;
    res.send(answer);
}

// app.get('/handleSum', handlefirstRequest)
app.post('/handleSum', handlefirstRequest)


function started() {
    console.log(` Example app listening on port ${port} `);
}
app.listen(port , started)
