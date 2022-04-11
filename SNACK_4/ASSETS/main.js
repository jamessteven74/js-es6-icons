/*

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


*/

// creo array di oggetti con persone

let persone = [
{
    nome: 'luigi',
    cognome: 'rossi',
    età: 35,

},

{
    nome: 'mario',
    cognome: 'bianchi',
    età: 25,

},

{
    nome: 'luca',
    cognome: 'verdi',
    età: 15,

},

{
    nome: 'matteo',
    cognome: 'gialli',
    età: 14,

},


];

const frasi = persone.map(p => {
    let ris = p.nome + " " + p.cognome + " "; 
    if(p.età >= 18){
        ris += "può guidare";
    }
    else{
        ris += "non può guidare";
    }

    return ris;
});

console.log(frasi);



















