// Adicionando notas
var notas = [2, 8, 9];

// Soma das notas
var soma = 0;

// Indice inicial para o loop
var i = 0;

while (i < notas.length) {
    soma += notas[i]; // Adiciona a nota atual à soma
    i++; // Incrementa o índice 
}

// Calculando média
var media = soma / notas.length;

if (media >= 7.0) {
    console.log("Nota 1: " + notas[0]);
    console.log("Nota 2: " + notas[1]);
    console.log("Nota 3: " + notas[2]);
    console.log("Média final: " + media.toFixed(2));
    console.log("APROVADO.");
} else {
    console.log("Nota 1: " + notas[0]);
    console.log("Nota 2: " + notas[1]);
    console.log("Nota 3: " + notas[2]);
    console.log("Média final: " + media.toFixed(2));
    console.log("REPROVADO.");
}


// Pensamento antigo.
// while (media >= 7.0) {
//     console.log("Nota 1: " + nota1);
//     console.log("Nota 2: " + nota2);
//     console.log("Nota 3: " + nota3);
//     console.log("Média final: " + media.toFixed(2));
//     console.log("APROVADO.");
//     break;
// }

// while (media < 7.0) {
//     console.log("Nota 1: " + nota1);
//     console.log("Nota 2: " + nota2);
//     console.log("Nota 3: " + nota3);
//     console.log("Média final: " + media.toFixed(2));
//     console.log("REPROVADO.");
//     break;
// }