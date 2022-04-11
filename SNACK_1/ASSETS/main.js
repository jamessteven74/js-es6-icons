/*



Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: 
marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. (modificato):

*/

//creazione array con 10 automobili




const automobili = [
    {
        marca: 'fiat',
        modello: '126',
        alimentazione: 'benzina'
    },
    {
        marca: 'citroen',
        modello: 'c3',
        alimentazione: 'benzina'
    },
    {
        marca: 'peugeot',
        modello: '205',
        alimentazione: 'gpl',
    },
    {
        marca: 'alfaRomeo',
        modello: '146',
        alimentazione: 'gpl',
    },
    {
        marca: 'audi',
        modello: 'a4',
        alimentazione: 'metano'
    },
    {
        marca: 'alfaRomeo',
        modello: '145',
        alimentazione: 'diesel'
    },

    {
        marca: 'tesla',
        modello: 's',
        alimentazione: 'elettrica'
    },

    {
        marca: 'tesla',
        modello: 'modelx',
        alimentazione: 'elettrica'
    },

    {
        marca: 'alfaRomeo',
        modello: '145',
        alimentazione: 'diesel'
    },

    {
        marca: 'alfaRomeo',
        modello: '145',
        alimentazione: 'diesel'
    },
    
    


]


// divido le auto in tre array, cominciando dalla benzina

//ALIMENTAZIONE BENZINA
const a_benzina = automobili.filter(auto => {
    return auto.alimentazione == 'benzina';
})

console.log(a_benzina);


//creo array per alimentazione Diesel
//ALIMENTAZIONE DIESEL
const a_diesel = automobili.filter(auto => {
    return auto.alimentazione == 'diesel';
})

console.log(a_diesel);


//ALTRE TIPLOGIE DI ALIMENTAZIONE
const diversi = automobili.filter(auto => {
    return auto.alimentazione != 'diesel' && auto.alimentazione != 'benzina';
})

console.log(diversi);
