// let x = 10;
// let y = 20;

// x < 5 && y > 15 ? console.log("Condition met") : console.log("Condition not met");

// let val = 1;

// switch (val) {
//     case 1:
//         console.log("Value is 1");
//         break;
//     case 2:
//         console.log("Value is 2");
//         break;
//     default:
//         console.log("Value is something else");
// }


// <-------------------- Through Ternary Operator -------------------->

// let val = 75;
// function marks(val){

// return (val>90 && val<=100) ? "A+": (val>80 && val<=90) ?  "A" : (val>70 && val<=80) ? "B" : (val>60 && val<=70) ? "C" : (val>50 && val<=60) ? "D" : (val>=0 && val<=33) ? "F" + " (Fail)" : (val>33 && val<=50) ? "Pass ho gaya " :"Invalid marks";

// }
// console.log(marks(val));


// <-------------------- Through if else if -------------------->


// let val = 915;
// function marks(val){

// if(val>90 && val<=100) return "A+"; 
// else if(val>80 && val<=90) return "A";
// else if(val>70 && val<=80) return "B";
// else if(val>60 && val<=70) return "C";
// else if(val>50 && val<=60) return "D";
// else if(val>=0 && val<=33) return "F" + " (Fail)";
// else if(val>33 && val<=50) return "Pass ho gaya " ;
// else return "Invalid marks";
// }

// console.log(marks(val));

// <-------------------- Through Early return pattern -------------------->

// let val = 45;
// function marks(val){

// if(val>90 && val<=100) return "A+"; 
//  if(val>80 && val<=90) return "A";
//  if(val>70 && val<=80) return "B";
//  if(val>60 && val<=70) return "C";
//  if(val>50 && val<=60) return "D";
//  if(val>=0 && val<=33) return "F" + " (Fail)";
//  if(val>33 && val<=50) return "Pass ho gaya " ;
//  return "Invalid marks";
// }

// console.log(marks(val));


// let i =1;
// while(i <= 32){
//     console.log(i);
//     i++;
// }

// <------------------- break and continue ------------------->

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i === 10) {
//         console.log("Breaking at 10");
//         break; // Exits the loop when i is 10 
//     }
// }


// for (let i = 1; i <= 20; i++) {
//     if (i === 10) {
//         console.log("Breaking at 10");
//         continue; // matlab 10 ko chod dena aur loop continue karega
//     }
//     console.log(i);
// }

// <------------------- Practice Question ------------------->

// for (let i = 10; i >= 0; i--) {
//     console.log(i); 
// }

//Even Numbers

// for (let i = 1; i <= 20; i++) {
//     console.log(i%2 === 0?  + i : "");
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i); 
//     }
// }

// let i = 1;
// while (i <=15) {
//     if (i % 2 === 1) {
//         console.log(i); 
//     }
//     i++;
// }

// for (let i = 1; i <= 10; i++) {
//      console.log("5 * " + i + " = " + (5 * i));
    
// }

// for (let i = 1; i <= 10; i++) {

//     console.log(`5 * ${i} = ${5 * i}`);
// }

// for (let i = 1; i <= 50; i++) {

//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// let sum =0;

// for (let i = 1; i < 101; i++) {

//     sum = sum + i;
// }
// console.log(sum);


// let count = 0;
// for (let i = 1; i < 101; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
    
//     console.log(i );
// }

// }

// let num = prompt("Enter a number ");

// for (let i = 1; i <= num; i++) {

//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     }
// }

// for (let i = 1; i <= 100; i++) {

//     if(i%7==0){
//         break; // Exits the loop when i is divisible by 7
//     }
//     console.log(i);

// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// Manual way 

// for (let i = 1; i <= 101; i++) {
//     if (i % 2 === 1) {

//         if (i ===11) {
//             break; 
//         }
//         console.log(i);
//     } 

// }

// let count = 0;
// for (let i = 1; i <= 101; i++) {
//     if(i%2 === 1 ){
//         count++;
//         console.log(i); 
//     }
//     if (count === 5) {
//         break; // Exits the loop after printing 5 odd numbers
//     }
// }