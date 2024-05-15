const tinderUser = {}
tinderUser.id = "123"
tinderUser.name="akash"
tinderUser.age = 25
// console.log(tinderUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('age'));


// object destructuring

const car = {
    model:"34dfd",
    price:245666,
    color:"red"
}

const {model,price,color} = car;
// console.log(color);