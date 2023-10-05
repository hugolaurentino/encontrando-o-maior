const numeros = [3, 4, 1, 8, 11, 7, 5];

let numeroMaior = 0
for (const maior of numeros) {
    if (maior > numeroMaior) {
        numeroMaior = maior
    }
}

console.log(numeroMaior);