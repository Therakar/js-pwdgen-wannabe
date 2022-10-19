// CHIEDE NOME ALL'UTENTE
// input nome utente
const firstName = prompt(`Inserisci il tuo nome`);

// output in console nome utente
console.log(firstName);

// output nella pagina del nome utente
document.getElementById(`first-name`).innerHTML = firstName;

// CHIEDE COGNOME ALL'UTENTE
// input nome utente
const lastName = prompt(`Inserisci il tuo cognome`);

// output in console nome utente
console.log(lastName);

// output nella pagina del nome utente
document.getElementById(`last-name`).innerHTML = lastName;