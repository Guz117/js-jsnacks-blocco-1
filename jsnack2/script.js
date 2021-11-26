/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// Ciclo for
const invitatiGatsby = [
    'Leonardo',
    'Tobey',
    'Carey',
    'Joel',
    'Elizabeth'
]

// const nomeInvitato = prompt('Inserisci il tuo nome');

// let find = false;

// for (let i = 0; i < invitatiGatsby.length; i++) {
//     const element = invitatiGatsby[i];
//     if (nomeInvitato.toLowerCase() == element.toLowerCase()) {
//         find = true;
//     } 
// } 

// console.log(find);
// if (find) {
//     console.log('Benvenuto alla festa');
// } else {
//     console.log('Mi dispiace non è nella lista degli invitati')
// }


// Ciclo while
const inserisciNome = document.getElementById('name');
const verifica = document.getElementById('verifica');

verifica.addEventListener('click',
function () {
    let i = 0;
    let find = false;
    while (i < invitatiGatsby.length) {
        const element = invitatiGatsby[i];
        if (inserisciNome.value.toLowerCase() == element.toLowerCase()) {
            find = true;
        } 
        i++;
    }
    
    if (find) {
        console.log('Benvenuto alla festa');
        document.getElementById('message').innerHTML = `Benvenuto alla festa`;
    } else {
        console.log('Mi dispiace non è nella lista degli invitati');
        document.getElementById('message').innerHTML = `Mi dispiace non è nella lista degli invitati`;
    }
});

