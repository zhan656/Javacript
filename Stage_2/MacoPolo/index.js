//Part I
// A function that responds 'Polo!' if it hears 'Marco'

MarcoPolo = function(){
    var call_name = prompt("Call Name: ");
    if (call_name==="Marco"){
        console.log("Polo!");
    };
}



//Part II
// 2 functions:
// 1. A function that takes a string and a callback function
// 2. A callback function that is called in response to the first function
// and executes the same rules as Part I. 

function string_call(callback){
    some_string = prompt("some string: ");
    callback(some_string);
}

function responseFunction(name){
    console.log("Hello, " + name + "!");
}

string_call(responseFunction);