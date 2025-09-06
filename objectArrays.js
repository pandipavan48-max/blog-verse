let person={
    name:"pavan",
    age:22
};
console.log(person.name)
console.log(person["age"])
console.log(person.gender)
const {name,age}=person; //destruction Assignment
console.log(name)
console.log(age)
let fruits =["apple","mango","orange"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let squaredNumbers=numbers.map(num=>num**2)//transform each element
console.log(squaredNumbers)
let evenNumbers=numbers.filter(num=>num%2===0)//filter elements based on condition
console.log(evenNumbers)
let oddNumbers=numbers.filter(num=>num%2!==0)
console.log(oddNumbers)
let sum=numbers.reduce((present,num)=>present+num,0)//reduce to single value
console.log(sum)
let Numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];
let people = [{
    name: "pavan",
    marks: 30
}, {
    name: "nagendra",
    marks: 25
}, {
    name: "getha",
    marks: 28
}];

