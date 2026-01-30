// Part 3 Js Scope cover nahi kiya kuyki kuch khass nahi hai 

// <-------------------------- THIS KEYWORD --------------------------->
// THIS keyword ek special keyword hai , kyuki jaise ki baaki saare keyword ki valuse ya unka nature same rehta hai THIS ki value ya nature badal jaata hai is baat se ki aap ussey kahan use kar rahe ho 

// GLOBAL Scope mai 
// console.log(this); // window return kar raha hai 

// Function Scope mai 
// function abc (){
//     console.log(this);
    
// }
// abc(); // window return kar raha hai

// Ek Aesa function jo OBJECT ke ander ho usse hum METHOD kehte hai

// METHOD Scope mai .. OBJECT dega matlab ek simple THIS likhne se aap pure Object Ko likh rahe ho

// let obj = {
//     name:"Charlii",
//     age:20,
//     myfun:function(){
//         // console.log(this.age);
//         console.log(this);
        
//     },
// };

// obj.myfun(); // obj return kar raha hai

// EVENT handler ke Scope mai 

// let h1 =document.querySelector("h1")
 // h1.addEventListener("click",function(){
//     console.log(this.textContent="mai bunty nahi hu !!");
// })
// wo banda jispe listner laga hai wahi return karega this 

// CLASS ke Scope mai 

// class Shero {

//     constructor(){
//         console.log("kya haal hai ");
//         this.a=12;
//     }
// }

// let val =new Shero(); // blank Object return kar raha hai 

// <--------------------- Special Cases Method Scope mai  ---------------------->

// let objj = {
//     name:"Charlii",
//     age:20,
//     myfun:() => // agar yahan arrow function banaya to THIS aapni value loose kar dega and vapas window return karega
//         {
//         console.log(this.age);
//         console.log(this);
     
//     },
// };

// objj.myfun(); // window return kar raha hai

// <------------------------------- Ek aur Case Code ko dhyan se dekho difference samajh aayega ------------------------------->


// let obj = {
//     name:"Charlii",
//     age:20,
//     myfun:function(){
      
        // agar yahan method ke ander agar ek aur funcion banaya to This aapni value loose  kar dega and vapas window return karega
        // function ab(){
        //     console.log(this); // yahan iss wajah se window ban raha hai ( Iss se bachne ke liye ander wale ko arrow function banao )
        // }
        // ab();

//         let ab = ()=>{
//             console.log(this); // Fixed Abb OBJECT hi dega 
            
//         }
//         ab();
//     },
// };

// obj.myfun(); // obj return kar raha hai

// <-------------------------- GLOBAL mai This Ki value In short --------------------------->
// global - window
// function - window
// method with es5 func - object
// method with es6 arrow func - window
// es5 function inside es5 method - window 
// arrow function inside es5 method - object
// event handler - element jispe event laga hai
// class - blank object

// <-------------------------- Call Apply And Bind  --------------------------->
//Function ko call karte waqt aap set kae sakte ho ki uske THIS ki value kya hogi 
// Confusion kahna hoti hai ki kispe call lagega Aur Hmaesha function hi Call hooga To function pe hi CALL lagega 

// let abj = {
//     name:"Bunty",
//     age:21,
// }
// function abc (a,b,c){
//     console.log(this,a,b,c);
//     // console.log(this.name);
// }
// abc();
// abc.call(abj,3,2,1);
// abc.apply(abj,[3,2,1]); // apply mai array pass karna hota hai same kaam karega buss array mai le raha hai values ko  // apply kehta hai aap sirf do parameters bhejoge  

// <------------------BIND ka example --------------------> 

// let obj = {
//     name:"Bunty",
//     age:21,
// }

// function abc(a,b,c){
//     console.log(this,a,b,c);
    
// }
// let func =abc.bind(obj,1,2,3);
// func();


// <------------------Object Oriented In JavaScript --------------------> 

//Humein  Seekhna hai factories banana , matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega aur fir hum naye naye objects with different values bana paenge .. Yahi uper uper se poora kaam hai OOPS mai 

// function CreateBiscuits(name , price,color){
//         this.name=name;
//         this.price= price;
//         this.color=color;
// }

// let biscuit1 =new CreateBiscuits("Oreo",10,"black");
// let biscuit2 =new CreateBiscuits("Parle-G",5,"Brown");



// <------------------Constructor Function  --------------------> 

// function CreatePencil(Company,color,price,){

//         this.company=Company;
//         this.color=color;
//         this.price=price;
        

//         this.write=function(text){
//                 let h1 =document.createElement("h1")
//                 h1.textContent=text;
//                 h1.style.color=color;

//                 document.body.appendChild(h1);
//         }
// }

// let pencil1 =new CreatePencil("Natraj","black",10);
// let pencil2 =new CreatePencil("Apsara","red",15);


// <------------------Prototype  --------------------> 


// function CreatePencil(Company,color,price,){

//         this.company=Company;
//         this.color=color;
//         this.price=price;
        

        // this.write=function(text){
        //         let h1 =document.createElement("h1")
        //         h1.textContent=text;
        //         h1.style.color=color;

        //         document.body.appendChild(h1);
        // }

        
        // CreatePencil.prototype.location="Indoore"; // iss tarah se hum prototype mai value add kar sakte hai
// }
// ye Write Function CreatePencil ke prototype mai laga diya hai isliye dono objects par kaam kar raha hai 

// CreatePencil.prototype.write=function(text){
//                 let h1 =document.createElement("h1")
//                 h1.textContent=text;
//                 h1.style.color=this.color;

//                 document.body.appendChild(h1);
//         }

// let pencil1 =new CreatePencil("Natraj","black",10);
// let pencil2 =new CreatePencil("Apsara","red",15);


// <------------------Class In OOps  --------------------> 

// class CreateMobile{

//         constructor(Company,color,price){
//                 this.company=Company;
//                 this.color=color;
//                 this.price=price;
//         }



//         Write(text){
//                let h1= document.createElement("h1")
//                h1.textContent=text;
//                  h1.style.color=this.color;
//                document.body.appendChild(h1);
//         }

//         earse(){
//                 document.body.querySelectorAll("h1").forEach((elem)=>{
//                         if(elem.style.color==this.color)
//                         elem.remove();
//         })
// }
// }
// let m1 =new CreateMobile("Apple","black",100000);
// let m2 =new CreateMobile("BlackBerry","blue",200000);


// <------------------Class In OOps  --------------------> 

// Pehli Chezz jo class mai chalta hai wo Hota hai Constructor 
// class User{

//         constructor(name,addres,email,age){

//                 this.name=name;
//                 this.addres=addres;
//                 this.email=email;
//                 this.age=age;
//         }

//         write(text){
//                let h1 = document.createElement("h1")
//                 h1.textContent=`${this.name}: ${text}`;
//                 document.body.appendChild(h1);
//         }
//         earse(){
//                 document.body.querySelectorAll("h1").forEach((elem)=>{
//                         if(elem.textContent===this.name)
//                         elem.remove();
//         })

// }

// write(text){
//    let h1 = document.createElement("h1");
//    h1.textContent = `${this.name}: ${text}`;
//    h1.dataset.owner = this.name;   // 👈 owner mark kar diya
//    document.body.appendChild(h1);
// }

// }


// class Admin extends User{ 

//         constructor(name,addres,email,age,role){
//                 super(name,addres,email,age) // super ka matlab hai parent class ka constructor call karna 
//                 this.role=role;
//         }

        
// erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//         elem.remove();   // 👈 sab delete kar do
//     });
// }
// }
// let u1 =new User("Bunty","Indoore","kk@123",21)
// let u2 =new User("Babli","Bhopal","jj@123",20)

// let a1 =new Admin("Badmash","Gawalior","cc@123",25,"Badmashii")


// <------------------Prototypal inheritance Vs classical Inheritance  --------------------> 

// Classical Inheritance - Java , C++ 
// Classes banana and unhe extend karna

// Inheritance - Class -> Class

// Prototypal Inheritance -  Object -> Object

// let coffei ={

//         colour :"black",
//         drink:function(){
//                 console.log("gut gut gut ");
                
//         }
// }

// let latte = Object.create(coffei); // iss tarah se hum coffei ko latte ke prototype mai laga sakte hai
// latte.taste="Very Tasty";
// console.log(latte);

// ek Object hai aap chaho to uski saari props/methods ko inherit kara sakte ho doosre object mai 



// <------------------ Synchronous Vs Asynchronous JavaScript  --------------------> 

// Koi bhi code JS mai line by line chalta hai ye natural pattern bhi hota hai ki code  line by line  chale , but kabhi kabaar aise cases aate hain life main jahan par aapka code wait karta hai and utni der mai agla code chal jaata hai

// console.log("heheh boi 1");
// console.log("heheh boi 2");
// setTimeout(() => {
//         console.log("heheh boi 3");
// }, 2000);

// console.log("heheh boi 4");

// aisa code jo line by line chale hota hai syns code
//aisa code jo jab chalne ke liye rady ho jaaye tab chale wo hai asyns


// <------------------ Callback pattern and Callback hell  --------------------> 

// setTimeout(function() {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   console.log("Hi Puneet!");
// }, 1000);


// function thodiDerr(val){

//         setTimeout(function(){
//                 console.log(val);
                
//         },5000)
// }
// thodiDerr(11);

// ek function ko agar aap ek aur function de rahe ho parametres mai , to wo parameter wala func keh lata hai CALLBACK FUNCTION

// Callback ka Example

// function dealy(func){
//         setTimeout(func,2000)
// }

// dealy(function(){
//         console.log("Hello World");
// })


// <------------------ Callback hell  --------------------> 