// Creating Access And Modify Array 

 let arr = [11,22,33,44,55,66];
 
 arr[2] =21;
 arr[3] =31;
// let a = arr.slice(0,2) main array par koi fark nahi padta hai 
// console.log(a);
// console.log(arr);

// Reverse() and Sort() 
// console.log(arr.reverse());

// Sort() ye ek function leta hai 

// let kk = arr.sort(function(a , b){
//     return b-a;
// })
 
// console.log(kk);

// foreach map filter ya reduce lagaoge array pe to wo ek function accept karega 

// Foreach Implementation 

// arr.forEach(function(val){
//     console.log(val);
  
// })

// Map sirf tab use karna hai jab ek naya array bananna ho bechle array ke data ke basis pe
// map dikhte hi man mai ek blank array bana lo .... Map foreach ki tarh khi hai RETURN karna aniivarya hai 

// let res = arr.map(function(val){

//     return 31;
// })
// console.log(res);

//Filter() purane array se kuch member lata hai new array mai 

// let kk = arr.filter(function(val){
//     if(val>34) return true;
//      // true likhne pe jo bhi value val mai aegi wo naye array mai jaaegi 
// })

// console.log(kk);

// Reduce ek baadi value ko single value maia laata hai 

// let kk = arr.reduce(function(accumulator , val){
// return accumulator+ val;
// } ,0 ); // 0  ka matlab hai intinal mai accumulator ki value kitni thi 
// console.log(kk);

// Some ***** // ek banda bhi agar condition ko pass kar raha hoga to TRUE de dega 

// let a = arr.some(function(val){

//     return val>50
// })
// console.log(a);

// Every  just some ka ulta hai  // saare bande condition ko pass kar rahe hai ya nahi

// let kk = arr.every(function(val){
//     return val>10
// })
// console.log(kk);

// Destructuring  and Spread Operator

// let [,,r,m] = arr; ye hota hai  Destructuring 

// let arr2 = [...arr] ye hota hai spread operator ka array mai use karna 

// practice questions

// Insert red and blue at the index of 1 

// let color = ["Green","yellow"]
// color.splice(1,0 ,"Red","Blue") // splice ka jugaad
// console.log(color);

