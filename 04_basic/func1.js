function addNumber(num1, num2){
  return num1+num2;


}
const res = addNumber(10,20);
// console.log(res);

function loginUserMessage(username){
    if(!username){
        console.log("Enter a username");
    }else{
       return `${username} is logged in `

    }

}
// console.log(loginUserMessage("hitesh"));


function calculateCartPrice(val1,val2, ...num){

    return num
}
// console.log(calculateCartPrice(200,300,400,500));

const user ={
    username:"pradip",
    age:28
}

function userProfie(anyobject){
   return `my name is ${anyobject.username} and my age is ${anyobject.age}`

}

const result = userProfie(user);
// console.log(result);