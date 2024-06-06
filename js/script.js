// Scrivi un programma che stampi in console i numeri da 1 a 100,

for (let i = 1; i <= 100; i++){
// Crea un container nel DOM
const container = document.getElementById("container");

// Crea un elemento da mettere dentro al contenitore
let square = document.createElement ("div");
container.append(square);

// Aggiungi una classe all'elemento square creato
square.classList.add("box");
console.log(square, container);
    
if (i % 3 === 0 && i % 5 === 0){ //  e che per i multipli di 3 e 5 stampi “FizzBuzz” al posto del numero
        const textFizzBuzz = "FizzBuzz";
        // aggiungi un elemento html con il numero o la stringa corretta da mostrare.
        square.append(textFizzBuzz);
        // aggiungi style per differenziare gli "square"
        square.style.backgroundColor = "red";
        console.log(textFizzBuzz);

    } else if (i % 3 === 0){ //  e per i multipli di 3 stampi “Fizz”.
        const textFizz = "Fizz";
        // aggiungi un elemento html con il numero o la stringa corretta da mostrare.
        square.append(textFizz);
        // aggiungi style per differenziare gli "square"
        square.style.backgroundColor = "green";
        console.log(textFizz);

    } else if (i % 5 === 0){// e per i numeri che sono multipli di 5 stampi “Buzz”.
        const textBuzz = "Buzz";
        // aggiungi un elemento html con il numero o la stringa corretta da mostrare.
        square.append(textBuzz);
        // aggiungi style per differenziare gli "square"
        square.style.backgroundColor = "yellow";
        console.log(textBuzz);
        
    } else {
        // aggiungi un elemento html con il numero o la stringa corretta da mostrare.
        square.append(i);
        // aggiungi style per differenziare gli "square"
        square.style.backgroundColor = "white";
        console.log(i);
    }
}


