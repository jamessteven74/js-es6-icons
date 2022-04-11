
/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.


*/

// output: Crea un nuovo array con la lista dei mammiferi.


//creo un array con lista di animali


let animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

console.log(animali);


//creo una lista con filter di soli mammiferi
let mammiferi = animali.filter( animale => {
  if(animale.classe == "mammiferi"){
    return true;
  }
  return false;
});

console.log(mammiferi);