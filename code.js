// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function

//function sayHello(input){
    //if(input === "Jane"){
        //return "Hello, Jane!"
    //}
   // else if(input === "Alex"){
        //return "Hello, Alex!"
   // }
    //else if(input === "Pat"){
       // return "Hello, Pat!"
   // } else {
      //  return "Say Hello!"
    //}

//}
function sayHello(input){
    if(typeof input == 'undefined' || typeof input == 'boolean'){
        return "Hello, World!";
    }
    return "Hello, " + input + "!"
}



