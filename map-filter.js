const numbers = [3,4,5,6,7,8];
// const output = [];

// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

const result = numbers.map(function(elem){ //function(element, index, array)
    return elem * elem;
})
//Same as privious line.
//const result = numbers.map(elem => elem * elem);
 
//console.log(result);

const bigger = numbers.filter( x => x>5);

const isThere = numbers.find(x => x>5);
console.log(bigger);
console.log(isThere);