const fs= require("fs");

// function callback (err, data){
//     console.log(data);
// }

// fs.readFile("b.txt", "utf-8", callback)


// 2]  Anonymous Functions

// fs.readFile("b.txt", "utf-8", function callback(err, data){
//     console.log(data);
// })


// fs.readFile("b.txt", "utf-8", function (err, data){
//     console.log(data);
// })

//   3] Arrow Functions

fs.readFile("b.txt", "utf-8", (err, data) => {
    console.log(data);
})