// let and const is a local scope and var is a global scope 

const a = 50;

if (true) {
    const a = 10;
    let b = 20;
    var c = 30;
    console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);