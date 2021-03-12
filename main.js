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

//ESERCIZI NUOVI 

console.log('------ESERCIZI NUOVI-------');
/* 1)
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati. */

console.log('ES 1');
function numRandom(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generatoreInvitato (nomi,cognomi,numero) {
    var listaInvitati = [];
    for (i=0 ; i<numero ; i++){
        var n = numRandom(0 , nomi.length);
        var c = numRandom(0 , cognomi.length);
        listaInvitati.push(nomi[n] + ' ' + cognomi[c]);
    }
    return listaInvitati;
}

var nomi = ['Claudia' , 'Carlo' , 'Paolo' , 'Yumi'];
var cognomi = ['Shikata' , 'Manuelli' , 'Totti' , 'Pelù', 'Rossi'];

console.log(generatoreInvitato(nomi,cognomi,3));

/* 2)
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */
console.log('ES 2');

var interi = [0,1,2,3,4,5,6,7,8,9,10];
var somma = 0;
for (i=0; i<interi.length ; i++){
    if (i%2 != 0){
        somma += interi[i];
    }
}
console.log(interi);
console.log('Somma delle posizioni dispari: ' + somma);


/* 3)
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */
console.log('ES 3');

var maggiore = [4,5,7,1,3,8,10];
var minore = [1,2,3];
console.log(maggiore);
console.log(minore);
var differenza = maggiore.length - minore.length;

for(i=0 ; i<differenza; i++){
    var random = numRandom(1 , 20);
    minore.push(random);
}

console.log(minore);

/* 4)
Scrivi una funzione che fonda due array (aventi lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */
console.log('ES 4');

function twoInOne (array1 , array2){
    if(array1.length != array2.length){
        console.log('LE LUNGHEZZE SONO DIVERSE')
        return;
    }
    var array3 = [];
    for (i=0; i<array1.length; i++){
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3;
}

var array1 = ['a','b','c','d'];
var array2 = [1,2,3,4];

console.log(array1,array2);
console.log('array3: ' + twoInOne(array1,array2));

/* 5)
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */
console.log('ES 5');

function posizioneCompresa (array,minPos, maxPos) {
    if (!(minPos < maxPos && maxPos<= array.length)){
        console.log('NON SONO RISPETTATE LE REGOLE');
        return;
    }
    var nuovoArray= [];
    for (i=minPos ; i<=maxPos ; i++){
        nuovoArray.push(array[i]);
    }

    return nuovoArray;
}

var arrayProva = [0,1,2,3,4,5,6,7,8,9];
var min = 3, max = 7;
console.log(arrayProva);
console.log('Array con indici compresi tra ' + min + ' e ' + max + ' : ' + posizioneCompresa(arrayProva,min,max));
