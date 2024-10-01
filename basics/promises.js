function promiseBody(resolve){
    setTimeout(resolve,5000)
}

function medicine1Get(){
    var answer = new Promise(promiseBody)

    return answer;
}

function printThing(){
    console.log("medicine 1 recieved");
}

var medicinePromise = medicine1Get();
console.log(medicinePromise);
medicinePromise.then(printThing)

// Learn objects in javascript from lec 1.3 async,await := 1:30 hrs

//  Rule :=

//  If you are defining a async function => It should synchronously return a Promise

// Promise :=

// The async func is giving a promise that it will call the print thing after it is resolved 
// The resolve is connected to then 
// Whenever the medicine1Get func is called it immediately returns a promise and when it is resolved (that is after 5 sec) 
// it calls .then to execute the prinThing    

function medicine2Get(){
    console.log("medicine 2 recieved");
}

var x = medicine2Get();
setTimeout(x,3000)

// This method generates callback hell.

// https://github.com/knadh/listmonk
//  Set up this project locally and try to make canges in their web api's
// Refer Kirat's video on this.
// Backend is in golang  and frontend is in vueJS.