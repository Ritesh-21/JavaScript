
    // <!-------- DoM and DoM Manupulation ------->

//  Yahan par element ko uski ID se select kar rahe hain (Element hora hai uska Data nahi)
// let kk = document.getElementById("rr");

// console.log(kk);

//  Yahan par element ko uski CLASS se select kar rahe hain (Element hora hai uska Data nahi)

// let jj = document.getElementsByClassName("pp")
// console.log(jj);

// Yahan par element ko uske naam se select kar rahe hain AUR QuerySelector ek ko hi select karta hai sabse first wale ko

// let kk = document.querySelector("h1")

// QuerySelector.All sabko select kar deta hai 

// let kk = document.querySelectorAll("h1")

// kisi bhi element ke ander agaer HTML badalna hai to INNERHTML se hoga 

// let h1 = document.querySelector("h1")
// h1.innerHTML="<i> hey </i>" // H1 ke ander ki html badaldii

// <----------------- Attribute Manipulation -------------------->
// tag ke ander joi attribute hote unko manip[ulate karo matlab (href) change kardo etc etc 

// let a = document.querySelector("a")
// a.href= "https://www.google.com"

// same yahi chezz ko app SETATTRIBUE se bhi achieve kar sakte ho 
//  let a = document.querySelector("a")
//  a.setAttribute("href" , "https://google.com")
 // ye parenthesis mai 2 chez leta hai konsa attribute badalna hai and kya value hai 

 // image ka src change kiya JS ki help se 

//  let img = document.querySelector("img")
//  img.setAttribute("src","https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg?v=1735571897&width=1500")

// <=---------------------- GET ATTRIBUTE and Remove Attribute -------------------->

// let a = document.querySelector("a")
// console.log(a.getAttribute("href")) Get Attribute 
// a.removeAttribute("href"); Remove Attibute 

// <------------------ Dynamic DoM Manipulation -------------------->

// Creation of element through Js
// 1) Create karo element then append ya prepend ... append pehle and prepend baad mai 
// let h1 = document.createElement("h1")
// h1.textContent="kya re bunty ";
// document.body.append(h1)
// document.querySelector("body").prepend(h1)
// console.log(h1); // to log kiya to browser mai dikhega 

// append .. matlab body ke ander last element ye hoga 
// prepend .. matlab body ke ander first element ye rahega 
// do tarike se element ko body mai chipka sakte hain 
// first way... document.body.append(h1)
// Second way.... document.querySelector("body").prepend(h1)

// let h1 = document.createElement("h1")
// h1.textContent="mai  baahar se aaya hu"
// document.body.append(h1)
// document.querySelector("div").append(h1)

// Js mai aap CLSSLIST ka use karke kisi element pe Class laga hata sakte ho 

// let h1 = document.querySelector("h1")
// h1.classList.toggle("kk") // class haati hoti hai to laga deta hai ... lagi hoti hai to hata deta hai
// h1.classList.remove("kk") // element pe se CLASS hatane ke liye  .add("class lagane ke liye ") 
// h1.style.color="red" // Js ki help se CSS apply kiya 


// <------------- Practice Question --------------------------->

// let h1 = document.getElementById("kk")
// h1.textContent="Hii Mickey kya fever theek ho gaya !! "

// let h1 =document.querySelector("#kk");
// h1.textContent ="saab badiya ";

//तुम्हें NodeList देता है, और NodeList पर सीधे .textContent लगाने से काम नहीं करेगा, क्योंकि .textContent किसी एक single element पर apply होता है, पूरी list पर नहीं।
// अगर तुम्हें बिना loop सारे <li> का text एक साथ चाहिए, तो दो आसान तरीके हैं:
// तरीका 1 — <ol> या <ul> को select करके उसका .textContent लेना
// let ol = document.querySelector("ol");
// console.log(ol.textContent);

// Output:

// apple
// mango
// banana
// grapes

// इसमें loop की ज़रूरत नहीं क्योंकि <ol> का .textContent उसके सारे children का text automatically दे देता है। 

// let ol = document.querySelector("ol");
// console.log(ol.textContent);

// loop ke sath  

// let lis =document.querySelectorAll("li")

// lis.forEach(function(val){

//     console.log(val.textContent);
    
// })

// let div =document.querySelector("div")
// div.title="Om";




 //  <!---------------- Events and Events Handling -------------->




 // Event matlab hota hai koi Action hua 
 // Event listner ka matlab hota hai aapne koi action ka reaction diya 



 // 2 tarike se EVENET LISTNER lagaya hai (1)



//  let h1 =document.querySelector("h1") // "dbclick" matlab double click karne pe 
//  function kk(){
//     h1.style.color="green";
//     h1.style.border="2px solid black";
//  } 
//  h1.addEventListener("dblclick",kk);

 // yahan pe function ko hi bana diya hai sirf name dene ki jagah reference ke liye uper dekhlo (2)

//  h1.addEventListener("click",function(){
//     h1.style.color="red";
//     h1.style.backgroundColor="yellow";
//     h1.style.border="2px solid black";
//  })

//  event.addEventListener("event name",function(){
// yahi hota hai event listner
//  })




// <----------- Event Listner ko hatana ------------------->

// h1.removeEventListener("dblclick",kk)

// kisi bhi prakaar ka change chahe type kiya ya hataya wo Input mai count hoga 
// ADDEVENTLISTNER jab bhi dekho to yaad rakhna yahan is Function(details) accept kar sakte hai

// <--------------- INPUT EVENT -------------->

// let input =document.querySelector("input");
// input.addEventListener("input",function(dets){
//     if(dets.data!==null){
//         console.log(dets.data);
//     }
// })


// <--------------- CHANGE EVENT -------------->

// Change Event tab chalta hai jab aapka koi input select ya textarea mein koi change ho jaye 

// let sel =document.querySelector("select");

// let Device = document.querySelector("#Device");

// sel.addEventListener("change",function(dets){

//     Device.textContent= `${dets.target.value} Device Selected `;
    
// })

// <--------------- SUBMIT EVENT -------------->
// Through Mini Project 3


// <--------------- MOUSEOVER AND MOUSEOUT EVENT -------------->

// let div =document.createElement("div")

// document.body.appendChild(div);
//  let divv =document.querySelector("div")

//  divv.style.background="red"
//  divv.style.height="200px"
//  divv.style.width="400px"

//  divv.addEventListener("mouseover",function(){
//      divv.style.background="blue"
//  })

//  divv.addEventListener("mouseout",function(){
//      divv.style.background="red"
//  })


// <--------------- MOUSEMOVE EVENT -------------->

// document.querySelector("divv")
// window.addEventListener("mousemove",function(dets){

//     divv.style.position="absolute";
//     divv.style.top=dets.clientY +"px";
//     divv.style.left=dets.clientX +"px";

// })


// <--------------- EVENT BUBLING  -------------->

// jispar Event aega agar usspar event nahi hua to hamara event uske parent par listner dhundhega aur aesa karte karte uper ki taraf move karega ( Aur agar jispe click kiya event lagaya to uska EVENT to chalega hi agar uske Parent par koi EVENTListner Hoga to wo Bhi chalega ) 

// let a =document.querySelector(".a")
// let b =document.querySelector(".b")
// let c =document.querySelector(".c")
// let btn =document.querySelector("button")

// btn.addEventListener("click",function(){
//     console.log("btn clicked");
    
// })

// c.addEventListener("click",function(){
//     console.log("c clicked");
    
// })
// b.addEventListener("click",function(){
//     console.log("b clicked");
    
// })
// a.addEventListener("click",function(){
//     console.log("a clicked");
    
// },true) // CAPTURE PHASE ON 

// jab bhi aap click karte ho ya koi bhi event raise karte ho to aapka jo event flow 2 phases mai chalta hai 

// phase 1 : Event top level element se neeche ki taraf aega 
// pahse 2 : Event raised element se parent ki tarf jaega 

// Aur pehle Phase 1 hoti hai 

// Hamesha phase 1 hi pehle hoti and wo by default Off hoti hai , agar hum usse On kar dein to Phase 1 ka Ans. milega (CAPTURE PHASE ON / OFF SE hota hai )



// <--------------- FORMS and FORM VALIDATION   -------------->
// through mini project 5


// <--------------- SET TIMEOUT and CLEAR Time Out  -------------->
// 1 sec = 1000 milliseconds
// let tt =setTimeout(function(){
//     console.log("Kya dekh raha hai" );
    
// },5000)

// // CLEAR TIMEOUT
// clearTimeout(tt);

// <--------------- SET INTERVAL and CLEAR INTERVAL  -------------->

// let tt = setInterval(function(){
//     console.log("Aye Mara jaega ");
    
// },5000)

// clearInterval(tt);

// <------------ Making Counter using SetINTERVALL ------------>

// let count =10;
// setInterval(function(){
//     if(count>=0){
//         console.log(count);
//         count--;
        
//     }
// },1000)


