// let and const is a local scope and var is a global scope 

const a = 50;

if (true) {
    const a = 10;
    let b = 20;
    var c = 30;
    // console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    let username = "pradip";
    function two(){
        let website ="youtube";
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "akash";
    if(username === "akash"){
        const website = "youtubevideo";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function numOne(num1){
    return num1 + 1;
}
console.log(numOne(5));


const numTwo =(num1)=> {
    return num1 + 2
}
const res = numTwo(5)
console.log(res);
