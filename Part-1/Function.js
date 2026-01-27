// Function Declaration

// function lolo(){
//     console.log("Hello, World!");
// }

// Function Expression

// let meg = function() {
//     console.log("weather is clody");
// }

// Fat Arrow Function

// let motu=()=>{
//     console.log("kya be jaadiye ")
// }
// motu();

// parameters and arguments

// function add(a, b) {
//     return a + b; // bhai console pe output nahi dega, kyuki likha kahan hai 
// }
// // add(5, 10);
// console.log(add(5, 10));  

// Default Parameters

 // parameter ki valuse yahan par bhi define kar skate hain , value arguments ke through nahi aayi to bata sakte ho
//  function add(val1 =1 , val2 =1)
// {
//     console.log(val1 + val2);
// }
// add(5,5);

// jab arguments kai saare ho to hame utne hi parameters banane padenge , iss se bachne ke liye hum rest operator ... ka use karte hain , agar wo function ke parameter space mai laage to wo rest operator ban jaata hai or agar wo arays and object mai lage to wo spread operator ban jaata hai

// Rest and Spread Operator

// function add(a,b,c,d,e) <--- is  se bachne ke liye hum rest operator ka use karte hain
// {
// console.log(a, b, c, d, e);
// }
// add(1, 2, 3, 4, 5); 

// function add(a,b,c...meg) <---- is the rest operator, it collects all arguments into an array
//  {
// console.log(a,b,c,meg); // meg is an array of all arguments passed

// }
// add(1, 2, 3, 4, 5); 

// Return & Early Return pattern

// function kiki(v){
//     return 2+v; // jahan se aaya hai wahi jaa
// }

// // console.log(kiki()); 
// let k = kiki(2); 
// console.log(k);

// first class function
// Funstions ko value ki tarah treat kar sakte ho
// to kahani kya hai ki function ko value ki trah use kar rahe hain yay nam ke function ko call kiya and usmia ek argument pass kiya jisko y se pakda aab Y ek function hai, isliye usko call kar sakte hain

// function yay(y){
//      y();
// }
// yay(function(){
// console.log("hey yayay");

// } 
// );  

// Higher Order function :- wo function hota hai jo ki return kare function ya fir accept kare ek function ko aapne parameters mai 

// 1 tarika 
// function kk(f){
//    f();
// }

// kk(function()
// {
// console.log(`hehehhe`);

// }
// );

//  2 way 

// function kk(){
//    return function(){
//     console.log("return se chala hu");
    
//    }
// }
// kk() (); // return likha hai isliye control wapas yahan aaya and ek () kk ko run karne ke liye hai and 2 wala wo return wale function ko call karne ke liye 
// console.log(kk());


// Pure function :- aesa function jo ki bahar ki value ko na badle wo hai PURE function

// let a = 31 ;

// function mm(){
//     console.log("weather is so cloudy");
// }
// mm();

// IMpure function :- aesa function jo ki bahar ki value ko na badle wo hai IMURE function

// function rr(){
//     return ++a;
// }

// console.log(rr());

// Clouser :- ek function jo return kare kare ek aur function aur return hone wala function use kare parent function ka koi variable

// function hehe(){
//     let m = 31 ;
//     return function(){
// console.log(m);
//     }
// }

// Lexical Scoping 

// function aa(){
//     let a; // to a ki jo scoping hai wo 132 se 139 tak hai 
//     function bb(){
//         let b ; // same way b ki 133 se 138
//         function cc(){
//             let c; // same way c ki 135 se 137
//         }
//     }
// }

// IIFE (immediately Invoke Function )
// ek function jiska naam nahi hota hai aur usko wrap karke rakhte hain ismai () and call kar dete immediately wahi iife hai 
// (function(){
// console.log("iffi bhai call ho gaye");

// })();

// FUNCTION STATEMENT HOISTING KI HELP SE RUN HO JAATE HAIN .... LEKIN FUNCTION EXPRESSION HOISTING MAI NAHI CHALTE HAIN 

// Practice Questions 

// let func = (a,b)=>{
//     return a*b;
// }
// let res =func(2,2);
// console.log(res);

// function getscore(...sc){
//   let total =0;
//     sc.forEach(function(val){
//         total = total + val;
//     })
//     return total;
    
// }
// let t =getscore(21,31,14,12)
// console.log(t);
