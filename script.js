// console.log("Hello")

// let
// var
// const

// let name = "laxmi"
// console.log(name);

// var name = "Laxmi"
// name="shri"
// console.log(name);

// const name="Laxmi"
// name = "Shri"
// console.log(name);

// datatypes
// Number
// Boolean
// string
// undefined
// null

// const name = "Laxmi"
// const age = 42
// const contact = 123456
// const address = "Nagpur"
// const isMarried = true
// const hisOwnCompany = null

// console.log(name);
// console.log(age);
// console.log(contact);
// console.log(address);
// console.log(isMarried);
// console.log(hisOwnCompany);
// console.log(typeof isMarried);

// operators
// arithmetic + - * / %
// conditional > < >= <= == === !=
// logical && || !
// ternary ? : ;
// assignment = ++ -= *= /= %=

// const num1 = 10
// const num2 = 10
// const isMarried = "true"
// const unMarried = false
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// conditional
// console.log(num1>num2);
// console.log(num1<num2);
// console.log(num1>=num2);
// console.log(num1<=num2);
// console.log(num1==num2);//it checks only equality
// console.log(isMarried===unMarried); //it check data as well as datatype

// logical operators
// console.log(num1>num2 && num2);

// ternary operators
// num1>num2?console.log('num1 is greater'):console.log('num2is greater');
// num1>num2?console.log(`${num1} is greater`):console.log(`${num2} is greater`);
// ;

// if(num1>num2){
//     console.log(`${num1} is greater`);
// }else{
//     console.log(`${num2} is greater`);
    
// }

// switch case
// const day = "Wednesday"
// switch(day){
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Monday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Monday":
//         console.log("Tursday");
//         break;
//     case "Monday":
//         console.log("Ftiday");
//         break;
//     case "Monday":
//         console.log("Saturday");
//         break;
//     case "Monday":
//         console.log("Sunday");
//         break;
//         default:
//             console.log("Day not found");
            
// }


// string
// const name = "Laxmi Jagdale"
// console.log(name);
// console.log(name.length);
// console.log(name[0]);
// console.log(name.slice(0,4));
// console.log(name.charAt(5));
// const separatedname = name.split(" ")
// const firstName = separatedname[0]
// const lastName = separatedname[1]
// console.log(firstName);
// console.log(lastName);
// const fullName = firstName+ " "+lastName
// console.log(fullName);
// const fullName = firstName.concat(" ").concat(lastName)
// console.log(fullName);
// const name1 = "Laxmi Jagdale"

// if (name1.includes("Laxmi")){
//     console.log("She is a fullstack developer");
    
// }

// for loop in string
// for(let i=0;i<fullName.length;i++){
//     console.log(fullName[i]+" ");
    
// }


// loop means repetitve execution upto a specific condition
// there are three types of loops
// while loop
// do while
// for loop

// let i = 1
// while(i<=5){
//     console.log(i);
//     i++    
// }

// let i=1
// do{
//     console.log(i);
//     i++    
// }while(i<=5)

// for(i=1;i<=10;i++){
//     console.log(i);    
// }



// if else if
// const num1=10
// const num2=5
// if(num1>num2){
//     console.log("num1 is greater");    
// }else{
//     console.log("nu2 is greater");    
// }


// nested if
// let a= 10
// let b = 20
// let c = 30
// if(a>b){
//     if(a>c){
//         console.log("a is greatest");        
//     }else{
//         console.log("c is greatest");        
//     }
// }
// else if(b>c){
//     console.log("b is greatest");    
// }else{
//     console.log("c is greatest");    
// }

// function is used to optimize the code
// function declaration
// function definition
// function call

// normal function
// expressive function
// arrow function
// parameterized function
// callback function
// anonymous function
// function inside function

// normal
// function callMyName(){
//     console.log("Laxmi");    
// }
// callMyName()

// expressive function
// const callMyName=function(){
//     console.log("Laxmi");    
// }
// callMyName()

// arrow function
// const callMyName=()=>{
//     console.log("Laxmi");    
// }
// callMyName()

// parameterized function
// const checkNumber = (num)=>{
//     if(num>0){
//         console.log("positive");        
//     }else{
//         console.log("negative");        
//     }
// }
// checkNumber(3)

// callback function
// function greet(name){
//     console.log("Hello",name);    
// }
// function welCome(callback){
//     // let name = "Laxmi"
//     callback("Laxmi")
// }
// welCome(greet)

// anonymous function
// ((name)=>{
//     console.log("This is anonymous function");    
// })
// ()

// function inside function
// function hello(){
//     console.log("Hello");
//     function World(){
//         console.log("World");        
//     }
//     World()
//     console.log("HEllo World");  
// }
// hello()


// array
// const studentsName = ["Laxmi","Shrivallabh","Nikhil","Pooja"]
// console.log(studentsName);

// to add elements at end of array
// studentsName.push("Yash")
// console.log(studentsName);
// studentsName.pop()
// console.log(studentsName);

// to add or remove from start
// studentsName.unshift("Yash")
// console.log(studentsName);
// studentsName.shift()
// console.log(studentsName);

// at any index
// console.log(studentsName.slice(0,3));
// console.log(studentsName.splice(0,1,"Pradeep"));

// clone of array
// const newArray = studentsName
// console.log(newArray);

// first way
// const newArray = [].concat(studentsName)
// console.log(newArray);

// second way
// const newArray = studentsName.slice(0)
// console.log(newArray);

// third way
// spread operator ...
// const testarr = [1,2,3,45,9]
// const newArray = [...testarr,"xyz","abc",...studentsName,6.77,5]
// console.log(newArray);


// for loop
// const fruits = ["apple","mango","banana","orange","chickoo"]
// let veggies = []
// for(let i = 0;i<=fruits.length;i++){
//     console.log(fruits[i]);
//     if(fruits[i]=="apple"){
//         veggies.push(fruits[i])
//     }    
// }
// console.log(veggies);

// for of loop
// const fruits = ["apple","mango","banana","orange","chickoo"]
// let veggies = []
// for(let fruit of fruits){
//     console.log(fruit);
//     if(fruit=="mango"){
//         veggies.push(fruit)
//     }    
// }
// console.log(veggies);

// for in loop
// const fruits = ["apple","mango","banana","orange","chickoo"]
// let veggies = []
// for(let fruit in fruits){
//     console.log((fruits[fruit]));
//     if(fruits[fruit] == "banana"){
//         veggies.push(fruits[fruit])
//     }    
// }
// console.log(veggies);

// foreach method 
// const fruits = ["apple","mango","banana","orange","chickoo"]
// fruits.forEach(function(item,index){
//     console.log(index+":"+item);    
// })


// object
// in javascript everything is an object
// it stores data in key value pair 
// it stores real world entity

// const student = {
//     name : "Laxmi",
//     age : 42,
//     address : "Nagpur",
//     hobbies : ["Singing","Reading","exploring"],
//     parents:{
//         mother : "xyz",
//         father : "abc"
//     }
// }
// console.log(student);
// console.log(student.name);

// const fruits = ["apple","mango","banana","orange","chickoo"]
// console.log((fruits.sort()));

// let student = {}
// student.name = "Laxmi"
// student.age = 42
// student.adress = "Nagpur"
// const keys = Object.keys(student)
// console.log(keys.length);
// console.log(student);

// for(let i = 0;i<=keys.length;i++){
//     console.log(`${keys[i]}:${student[keys[i]]}`);    
// }

// for(let key of keys){
//     console.log(`${key}:${student[key]}`);
// }

// for(let index in keys){
//     console.log(`${keys[index]}:${student[keys[index]]}`);    
// }



// passing object to function
// const userMethod = {
//     myInfo : function(){
//         return `${this.name} ${this.age} ${this.address}`
//     },
//     callMyName : function(){
//         return '${this.name}'
//     }
// }
// const userDetails = {
//     name : "laxmi",
//     age:42,
//     address:"Nagpur",
//     callMyName:userMethod.callMyName,
//     myInfo:userMethod.myInfo
// }
// console.log(userDetails.myInfo());

// // try catch 
// try {
//     let x = 5;
//     console.log(x);
// } catch (error) {
//     console.log("Error occurred");
// } finally {
//     console.log("Execution completed");
// }

// let today = new Date()
// console.log(today);
// let now = new Date()
// console.log(now.getFullYear());
// console.log(now.getDate());

// console.log(Math.PI);
// console.log(Math.round(2.3));
// console.log(Math.round(4.8));
