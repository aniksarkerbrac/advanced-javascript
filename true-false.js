// Falsy-value---
//0
//""
//undefined
//null
//NaN
//false

// Truthy-value---
// '0', " ",empty-array,empty object;

//const age = 4;
let age;
console.log(age); // If something is UNDEFINED or NULL then it shows false.
if(age){ // here age will be always true whether value negative or positive. if age=0 then it shows false.
    console.log("condition is true"); //same goes for string. if name = "" then it shows false.
}
else{
    console.log("condition is false");
}

