let firstName:string ="theodore";

console.log(firstName);

const getFullname = (firstName: string ,lastName:string)=>{
    return firstName + " " + lastName;

}

const getDetails =(fullname:string, lastName: string)=>{
    return`My name is ${fullname} , i am $ {age} Old`;
};
// function getAge(yob:number):string{
    // return 2024-yob;
// }


let isMale: boolean
let user: Object = {
    name:"kosi",
};
user = "kosi"

interface User{
    name: string;
    age:number;
    isMale:boolean;
    gender: "male" 
}
const introductionUser = (user:User):string =>{
    return `my name ${user.name} i am ${user.age} years old, am also ${user.gender}(${user.isMale})`

}
const introduction = {
    name: "Theodore",
    age: 50,
    gender:"male"
}
console.log(introduction)
