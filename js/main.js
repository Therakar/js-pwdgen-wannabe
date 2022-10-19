// CHIEDE NOME ALL'UTENTE
// input nome utente
const firstName = prompt(`Inserisci il tuo nome`);

// output in console nome utente
console.log(firstName);

// output nella pagina del nome utente
document.getElementById(`first-name`).innerHTML = firstName;



// CHIEDE COGNOME ALL'UTENTE
// input cognome utente
const lastName = prompt(`Inserisci il tuo cognome`);

// output in console cognome utente
console.log(lastName);

// output nella pagina del cognome utente
document.getElementById(`last-name`).innerHTML = lastName;



// CHIEDE COLORE PREFERITO ALL'UTENTE
// input colore preferito utente
const favColor = prompt(`Inserisci il tuo colore preferito`);

// output in console colore preferito utente
console.log(favColor);

// output nella pagina del colore preferito utente
document.getElementById(`fav-color`).innerHTML = favColor;