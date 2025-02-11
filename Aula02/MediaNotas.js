// Adicionando notas
var nota1 = 4;
var nota2 = 8;
var nota3 = 9;

// Calculando média
var media = (nota1 + nota2 + nota3) / 3;

// if (media >= 7.0) {
//     console.log("Nota 1: " + nota1);
//     console.log("Nota 2: " + nota2);
//     console.log("Nota 3: " + nota3);
//     console.log("Média final " + media.toFixed(2));
//     console.log("APROVADO.");
// } else {
//     console.log("Nota 1: " + nota1);
//     console.log("Nota 2: " + nota2);
//     console.log("Nota 3: " + nota3);
//     console.log("Média final " + media.toFixed(2));
//     console.log("REPROVADO.");
// }

while (media >= 7.0) {
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("Média final: " + media.toFixed(2));
    console.log("APROVADO.");
    break;
}

while (media < 7.0) {
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("Média final: " + media.toFixed(2));
    console.log("REPROVADO.");
    break;
}