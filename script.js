// Ottenere il riferimento agli elementi nel documento HTML
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// Inizializzare la variabile 
let count = 0;

// Funzione per incrementare la variabile count e aggiornare l'elemento countEl
function increment(){
    count += 1;
    countEl.textContent = count; // Aggiornare il contenuto testuale di countEl per visualizzare il nuovo conteggio
}

// Funzione per salvare il conteggio corrente e ripristinare la variabile count
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr; // Aggiungere countStr all'elemento saveEl
    countEl.textContent = 0; // Reimpostare il contenuto testuale di countEl per visualizzare 0
    count = 0; // Reimpostare la variabile count a 0
}