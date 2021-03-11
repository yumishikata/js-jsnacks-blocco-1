/* 1)
Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchine = [
    {
        "varietà" : 'A',
        "peso" : 15,
        "lunghezza": 20
    },
    {
        "varietà" : 'B',
        "peso" : 13,
        "lunghezza": 23
    },
    {
        "varietà" : 'C',
        "peso" : 25,
        "lunghezza": 22
    },
    {
        "varietà" : 'D',
        "peso" : 31,
        "lunghezza": 21
    },
    {
        "varietà" : 'E',
        "peso" : 7,
        "lunghezza": 13
    },
    {
        "varietà" : 'F',
        "peso" : 9,
        "lunghezza": 12
    },
    {
        "varietà" : 'G',
        "peso" : 21,
        "lunghezza": 11
    },
    {
        "varietà" : 'H',
        "peso" : 25,
        "lunghezza": 17
    },
    {
        "varietà" : 'I',
        "peso" : 8,
        "lunghezza": 16
    },
    {
        "varietà" : 'J',
        "peso" : 10,
        "lunghezza": 14
    }
];
var somma = 0;
for(var key in zucchine){
    console.log(zucchine[key]);
    somma+= zucchine[key]['peso'];
}

console.log('peso tot: ' + somma);

/* 2)
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm (:sorrisetto:).
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

var piccole = [];
var grandi = [];
for(i=0; i<zucchine.length; i++){
    if(zucchine[i].lunghezza <=15) {
        piccole.push(zucchine[i]);
    } else {
        grandi.push(zucchine[i]);
    }
}
var sommaPicc = 0;
console.log('PICCOLE');
for(var key in piccole){
    console.log(piccole[key]);
    sommaPicc+= piccole[key]['peso'];
}
console.log('peso tot: ' + sommaPicc);

var sommaGran = 0;
console.log('GRANDI');
for(var key in grandi){
    console.log(grandi[key]);
    sommaGran+= grandi[key]['peso'];
}
console.log('peso tot: ' + sommaGran);


/*3)
Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC)*/

function girata(stringa){
    var girata = [];
    for (i=stringa.length-1 ; i>= 0 ; i--){
        girata.push(stringa.charAt(i));
    }
    

    return girata.join('');
}

var ciao = 'Ciao';

console.log(girata(ciao));