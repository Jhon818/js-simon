// Un alert() espone 5 numeri generati casualmente.
let rdnNumber = [];
function getRandomInt() {
    for (let i = 0; i < 5; i++) {
       var num = Math.floor(Math.random()*100);
        rdnNumber.push(num);  
     }
  }
  getRandomInt();
  alert(rdnNumber);
// Da li parte un timer di 30 secondi.
setTimeout(myFunction,30000)
function myFunction(){
    alert("Caricamento");
}
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var lastNumber = parseInt(prompt("inserisci i numeri precendenti"));
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
function checkNumber(){
    if(lastNumber == rdnNumber){
alert("hai indovinato tutti i numeri");
    }
    else {
        alert("Ripova");
    }
   
}
