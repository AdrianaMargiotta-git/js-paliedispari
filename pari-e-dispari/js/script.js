/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto*/

//l'utente scegli pari o dispari
var scommessa = prompt ("Scegli pari o dispari");
console.log("l'utente ha scelto: ", scommessa);
document.getElementById('utenteScelta').innerHTML = "L'utente ha scelto: " + scommessa;

//l'utente sceglie un numero da 1 a 5
var numeroUser = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("l'utente ha scelto il numero: ", numeroUser);
document.getElementById('utenteNumero').innerHTML = "L'utente ha scelto il numero: " + numeroUser;

/*if ((numeroUser > 5) || (numeroUser < 1)) {
  alert("Numero non valido. Per favore riprova!");
  prompt("Scegli un numero da 1 a 5");
}*/

//numero random da 1 a 5 per il computer
var numeroComputer = numeroRangomGen(1, 5);
console.log("il computer ha scelto il numero: " + numeroComputer);
document.getElementById('computerNumero').innerHTML = "Il computer ha scelto il numero: " + numeroComputer;

function numeroRangomGen(min, max) {
  var nRG = Math.floor(Math.random()* max) + min;
  return nRG;
};

//sommiamo i due nuemri
var somma = sommaDueNumeri(numeroUser, numeroComputer);
console.log("la somma dei due numeri è: " + somma);
document.getElementById('numeriSomma').innerHTML = "La somma dei numeri è: " + somma;

function sommaDueNumeri(numero1, numero2) {
  var sDN = numero1 + numero2;
  return sDN;
}

//stabiliamo se la somma è pari o dispari e chi ha vinto?
var risultato = pariODispari(somma);
console.log("Risultato: ", risultato);
document.getElementById('pariDispari').innerHTML = "La somma dei numeri è: " + risultato;

  //chi ha vinto????
if (scommessa === risultato) {
 console.log("Hai vinto!");
 document.getElementById('vincitore').innerHTML = "Hai vinto!! &#128527;";
} else {
  console.log("Hai perso!");
  document.getElementById('vincitore').innerHTML = "Hai perso!! &#128547; Ricarica la pagina e ritenta";
};

  //funzioni pari o dispari
function pariODispari(result){
  if (result % 2 === 0){
    return 'pari';
  } else{
    return 'dispari';
  }
}
