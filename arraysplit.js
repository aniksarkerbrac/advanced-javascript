const nums = [1,2,3,4,5,6,7,8];
//const part = nums.slice(2,5); //index 2 theke before 5 porjnto print hbe. It didn't change the orginal array.
const removed = nums.splice(2,3,77,88,99); // it change the orginal array
//console.log(removed);
//console.log(nums);

const together = nums.join(",");
console.log(together);