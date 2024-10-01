// Web Server talking to another Node.js file 

// This is carried out using fetch library ismilar to fs , express 


function callBack(result){
    console.log(result);
}



var sendOb = {
    method : "POST"
};

fetch("http://localhost:3000/handleSum" , sendOb).then(callBack)