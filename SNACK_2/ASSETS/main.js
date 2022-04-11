/*

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']

*/

// creao array con nomi in minuscolo


/*
const nomi = ['grogu', 'MANDO', 'Luke', 'john'];
console.log(nomi);


//trasformo iniziali nomi in maiuscolo
const nomiMaiuscolo = nomi.map (nome =>{
    return nome[0].toUpperCase() + nome.slice(1).toLowerCase()
})

console.log(nomiMaiuscolo);

*/

// altra variante con nomi in minuscolo

const nomi = ['grogu', 'MANDO', 'Luke', 'john'];
console.log(nomi);

const capitalize = nomi.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
})

console.log(capitalize);