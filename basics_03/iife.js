// INMEDIATELY INVOKED FUNCTION EXPRESSION
// GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAYI BAAR TOH USKE DECLARATION AND VARIABLES KO
// HATANE KE LIYE HAMNE IIFE KA USE KARTE HAI
// SUDDEN IMPLEMENTATION OCCURS

(function one () {      // NAMED IIFE
    console.log(`DB  CONNECTED`)
})();


((username) => {                                 // SIMPLE IIFE
    console.log(`DB connected  ${username}`);
})("saujanya")