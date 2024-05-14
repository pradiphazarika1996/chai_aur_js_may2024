const myArr = [1,2,3,4,5,6,7,8,9];
// console.log(myArr[0]);
// const result = myArr.map(element => {
// return element;
// });
// console.log(result);

console.log(myArr);

const myn1 = myArr.slice(1,3); //cannot count last index number
console.log("A", myn1);

const myn2 = myArr.splice(1,3); // count last index number
console.log("B", myn2);