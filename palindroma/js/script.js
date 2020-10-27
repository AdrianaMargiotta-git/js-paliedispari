/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//dichiaro le variabili
/*var verifica = document.getElementById('bottone');
//var inputUtente = document.getElementById('inputUtente').value;

//il codice funzione correttamente con il prompt
//var inputUtente = prompt("Inserisci una parola");

console.log(parolaPalindroma(inputUtente));

verifica.addEventListener('click',
//definiscono la funzione
function parolaPalindroma (stringa) {

  //ricevo il dato inserito dall'utente
  var inputUtente = document.getElementById('inputUtente').value;

  if (stringa == stringa.split('').reverse().join('')) {
    return "la parola è palindroma";
  } else {
    return "la parola non è palindroma";
  }
}
);*/

//codice FUNZIONANTE con il prompt
var inputUtente = prompt("Inserisci una parola");

console.log("parola inserita dall'utente: " + inputUtente);
console.log(parolaPalindroma(inputUtente));

//definiscono la funzione
function parolaPalindroma (stringa) {
  if (stringa == stringa.split('').reverse().join('')) {
    return "la parola è palindroma";
  } else {
    return "la parola non è palindroma";
  }
};

//stampa i risultati
document.getElementById('parolautente').innerHTML = "La parola che l'utente ha inserito è: " + inputUtente;
document.getElementById('palindroma').innerHTML = parolaPalindroma(inputUtente);
