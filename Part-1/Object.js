// Object Introduction 
// Object hum tab banate hain jab ek hi entity ke bare mai sab kuch cahiye 

// let obj = {} // blank object hai ye 

// let stud ={
//     name:"Vavi",
//     id : 87,
//     class : "4th sem"
// }

// stud["name"] // aese bhi access kar sakte hain

// For-IN LOOP 

// let obj = {
//     name : "Ritti ",
//     age : 22,
//     email : "ritti@312"
// }

// for (let key in obj) {
//     console.log(key , obj[key]); ye obj ke ander ki value print karane ke liye hai
//     }

// Object.keys kya karta hai aapke object ki keys ko ek array mai dal deta hai 

// let obj = {
//     name : "Ritti ",
//     age : 22,
//     email : "ritti@312"
// }
// Object.keys(obj) // Object.entries(obj) ye Array of Arrays deta hai matlab key and vale ek arraya mai fir puri value ek array mai

// Object.assign and spread operator in object domo hi copy karne ke kaam aate hain 

// let obj = {
//     name : "Ritti ",
//     age : 22,
//     email : "ritti@312"
// }
// by Assign operator

// let oo = Object.assign({ nam: "Mickey" }, obj);


// By spread Operator 
// let obj2 = {...obj}

// Jab aapka ek Object nested Object banta hai to copy karne par bhale hi SPREAD operator se kiya ho ander ke NESTED object REFERENCE pass karne lagte hain baki values to copy ho jaatio hai 

// let obj = {
//     name:"max",
//     age:66,
//     email:"max@123",

//     addres:{
//         city:"bhopal"
//     }   
// }
// To iss Sistuation mai DEEP Clone karte hain 
// let obj2 = {...obj}
// obj2.addres.city="Indori";

// JSON.STRINGIFY() andd  JSON.PARSE()

// let obj2 = JSON.parse(JSON.stringify(obj))

// OPtional Chaining 

// let obj = {
//     name:"max",
//     age:66,
//     email:"max@123",

//     addres:{
//         city:"bhopal"
//     }   
// }

// obj?.addres?.city Yahi hai optional Chainging ? KA matlab hai agar hai to de de nahi to Error mat dena 

// Computed Property 

// let roll = "Java D"

// let obj = {
//     name:"max",
//     age:66,
//     email:"max@123",

//     addres:{
//         city:"bhopal"
//     },   
//     [roll] : "Ritti", // yahi hai COmputed Property roll appni Value Rakhega idhar and usmai mai Ritti
// };


// PRactice Question  Objects ke Question lagaane padenge 

// let Stud ={
//     name:"max",
//     roll: 45,
//     isEnrolled :true
// };