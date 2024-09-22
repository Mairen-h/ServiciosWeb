
const args = process.argv.slice(2);


if (args.length !== 2) {
    console.log("Por favor, digita solo dos números.");
    process.exit(1);
}

const number1 = parseFloat(args[0]);
const number2 = parseFloat(args[1]);


if (isNaN(number1) || isNaN(number2)) {
    console.log("Ambos argumentos deben ser números válidos.");
    process.exit(1);
}

const suma = number1 + number2;
const resta = number1 - number2;
const multiplicacion = number1 * number2;
const division = number2 !== 0 ? number1 / number2 : "No se puede dividir entre cero";


console.log(`Resultados:`);
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
