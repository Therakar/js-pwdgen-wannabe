// CHIEDE NOME ALL'UTENTE
// input nome utente
const firstName = prompt(`Inserisci il tuo nome`);

// stampa in console nome utente
console.log(firstName);

// stampa nella pagina del nome utente
document.getElementById(`first-name`).innerHTML = firstName;



// CHIEDE COGNOME ALL'UTENTE
// input cognome utente
const lastName = prompt(`Inserisci il tuo cognome`);

// stampa in console cognome utente
console.log(lastName);

// stampa nella pagina del cognome utente
document.getElementById(`last-name`).innerHTML = lastName;



// CHIEDE COLORE PREFERITO ALL'UTENTE
// input colore preferito utente
const favColor = prompt(`Inserisci il tuo colore preferito`);

// stampa in console colore preferito utente
console.log(favColor);

// stampa nella pagina del colore preferito utente
document.getElementById(`fav-color`).innerHTML = favColor;


// CREAZIONE PASSWORD
// costante numero classe
const classNumber = `76`;

// creazione password
const password = firstName + lastName + favColor + classNumber;

// stampa in console la password
console.log(password);

// stampa nella pagina la password
document.getElementById(`password`).innerHTML = password;