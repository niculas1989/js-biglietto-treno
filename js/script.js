console.log('JS OK!')

/* 
        Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


Passiamo all'analisi della traccia:
1 - Chiedere all'utente quanti KM vuole percorrere
2 - Chiedere all'utente l'età
3 - calcolare il prezzo del biglietto
3b - farlo attraverso queste regole:
    - il costo è di 0.21€ al KM
    - va applicato uno sconto del 20% per i minorenni (età < 18)
    - va applicato uno sconto del 40% per gli anziani (età > 65)
4 - il prezzo dovrà essere fornito con al massimo due decimali (per esempio 10.50€); è una proprietà che non abbiamo visto in classe, cercherò come su W3School o su Google.
*/


// ! Chiedere all'utente KM ed età (punto 1+2 insieme)
const kmTrip = prompt('Quanti kilometri vuoi fare?').trim();
console.log('kmTrip: ', kmTrip)
const userAge = prompt('Quanti anni hai?').trim();
console.log('userAge: ', userAge)

// ! Gestiamo adesso le eccezioni - se l'utente non inserisce un numero

if (isNaN(kmTrip && userAge)) {
    alert('Si possono utilizzare solamente caratteri numerici')
    window.location.reload() // ! trucchetto da utilizzare pochissimo
}


// ! Calcolare il prezzo del biglietto

let ticketPrice = (kmTrip * 0.21).toFixed();
console.log(`Il prezzo del biglietto senza sconti è di ${ticketPrice}`)
const resultElement = document.getElementById('result');
resultElement.innerHTML = `Il prezzo del tuo biglietto è di ${ticketPrice}€`



// ! Specificare adesso le tipologie di sconto attraverso gli IF

if (userAge < 18) {
    const underEighteenPrice = (ticketPrice / 100) * 20;
    let ticketPriceSale = (ticketPrice - underEighteenPrice).toFixed();

    console.log(`Il prezzo del biglietto con lo sconto per minorenni è di ${ticketPriceSale}`)
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Il prezzo del tuo biglietto, visto che hai meno di 18 anni è di ${ticketPriceSale}€`
} else if (userAge > 65) {
    const overSixtyFivePrice = (ticketPrice / 100) * 40;
    let ticketPriceSale = (ticketPrice - overSixtyFivePrice).toFixed();

    console.log(`Il prezzo del biglietto con lo sconto per coloro che hanno più di 65 anni è di ${ticketPriceSale}`)
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Il prezzo del tuo biglietto, visto che hai più di 65 anni è di ${ticketPriceSale}€`
}


