// Scrivi un programma che stampi in console i numeri da 1 a 100,

for (let i = 1; i <= 100; i++){
    
if (i % 3 === 0 && i % 5 === 0){ //  e che per i multipli di 3 e 5 stampi “FizzBuzz” al posto del numero
        const textFizzBuzz = "FizzBuzz";
        console.log(textFizzBuzz);

    } else if (i % 3 === 0){ //  e per i multipli di 3 stampi “Fizz”.
        const textFizz = "Fizz";
        console.log(textFizz);

    } else if (i % 5 === 0){// e per i numeri che sono multipli di 5 stampi “Buzz”.
        const textBuzz = "Buzz";
        console.log(textBuzz);
        
    } else {
        console.log(i);
    }
}

