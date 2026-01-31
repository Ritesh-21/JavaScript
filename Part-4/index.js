// <----------- 1  Design Pattern ------------------>


// <----------- Module Pattern (IIFE) ------------------>

// Module Pattern ek design pattern hai jisme hum aapna code ek SElF executing Function (IIFE) ke ander likhte hain, taaki variables aur function private rahen.

// Iske ander se sirf hum wahi chezz return karte hain jo bahar use karni hain


//Iss pattern ka main fayada hai data hiding (encapsulation) aur clean structure , taaki code secure , reuseable aur manageable ban saake 

// IIFE ke ander jo bhi banega wo private hai

// let func = (function(){ // IFFE ka chota Example 

// return 31;
// })();

// Another IFFE Example 

let bank = (function () {

    let bb = 10000;

    function checkB() {
        console.log(bb);

    }

    function SetB(val) {
        bb = val;
        // console.log(bb);

    }

    function withdrawB(val) {
        if (val <= bb) {

            bb -= val;
            console.log(bb);

        }
    }

    // Yahan se AAb ek Object Return karega
    return {
        checkB,SetB,withdrawB
    }

})();

// bank.checkB() kaam kar raha hai


// <----------- Revealling  Module Pattern (IIFE) ------------------>

// ek dum bilkul same hai jab Return karte hain to name change kar sakte hain function ka 

// Example 

//  return {
//       ch :  checkB, fir ye jo New name diye hain inse tum Function Call kar sakte ho 
//        Se : SetB,
//        wi : withdrawB
//     }