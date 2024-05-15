const cricket = ["sachin", "rahul", "dhoni"];
const actor = ["salman", "sharukh", "hritik"];

const allheroes = cricket.concat(actor);
// console.log(allheroes);

const all_data = [...cricket, ...actor];
// console.log(all_data);

const all_array = [1,2,3,[4,5,6],[7,8],[9,7]];
const result = all_array.flat(Infinity)
// console.log(result);

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2,score3));