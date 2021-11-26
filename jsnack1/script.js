/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// Ciclo for
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     const number =  parseInt(prompt('inserisci un numero'));
//     sum += number;
// }
// console.log(sum)
// document.getElementById('somma').innerHTML = `La somma dei numeri inseriti è ${sum}`;

// Ciclo while
let sum = 0;
let i = 0;

while(i < 10) {
    const number =  parseInt(prompt('inserisci un numero'));
    sum += number;
    i++;
}

console.log(sum)
document.getElementById('somma').innerHTML = `La somma dei numeri inseriti è ${sum}`;