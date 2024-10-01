console.log("Hello");
function print(){
    console.log("yayy");
}

setTimeout(print,3*1000);



// This block of code is synchronous in nature
let counter = 0;
for (let i = 0; i < 100; i++){
    counter = counter + 1; 
}
console.log(counter);


/*  As javascript has single threaded nature.
    Hence its asynchronou nature helps it to process multipke tasks in smaller time constraint. 
 */

var x = 1

function print_Counter(){
    console.clear()
    while(x < 20){
        console.log(x);
        x = x + 1;
    }
}

// setInterval(print_Counter,3000);



/* Investigate thread.sleep(1000) from the official documentation.
*/

/*
 While processing a async function :=
 It is first stored in Web API's 
 Then after its timeout it is move into callback queue
 An Event Loop put it from call back queue into call stack 
 Refer to website loupe for better understanding.
*/

/*
 Case :=
 if there is a heavy  task running synchronously
 and we have a async task which is moved from web api's into callback queue
 It will wait until sync task running in call stack is not completed 
 The callback queue will  notify the call stack once its free. 
*/

/*
  Async call chaining:=
  setTimeout(function medicine1Get(){
    console.log("medicin 1 recieved");
    setTimeout(function medicine2Get(){
        console.log("medicine 2 recieved");
        setTimeout(function medicine3Get(){
            console.log("medicine 3 recieved");
        }, 3000)
    }, 2000)
  }, 1000)



  Simpler version of above code :=
   
  function medicine2Get(){
    console.log("medicine 2 recieved");
  }

  function medicine1Get(){
    console.log("medicine 1 recieved");
    setTimeout(medicine2Get,2000)
  }

  setTimeout(medicine1Get,1000)

  This is called CallBack Hell
   That's why promises are introduced.

*/
