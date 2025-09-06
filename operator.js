

//Arithmetic Operators

let x=10,y=3;

console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//Assignment Operators

let z=5;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//Comparision Opeators


let a=10,b="10";

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<b)

//Logical Operators
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))


Manoj_Harshi

//String Operators
let firstName="Manoj"
let lastName="Harshi"
let fullName=firstName+" "+lastName;
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName}, Welcome `
console.log(correctName)

//Ternary Operators
let myAge=19;
if(myAge>=18){
    console.log("Eligiible to Vote")
}else{
    console.log("Not Eligible")
}
let result=myAge>=18 ? "Eligible to Vote":"Not Eligible"
console.log(result)

//Increment and Decrement Operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)


//typeof Operators
console.log(typeof count)
console.log(typeof "Manoj")
console.log(typeof 18)


