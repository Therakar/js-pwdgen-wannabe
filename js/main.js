// CHIEDE NOME ALL'UTENTE
// input nome utente
const firstName = prompt(`Inserisci il tuo nome`);

// output in console nome utente
console.log(firstName);

// output nella pagina del nome utente
document.getElementById(`first-name`).innerHTML = firstName;