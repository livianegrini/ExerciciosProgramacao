// Parte 1
// console.log(x);
// var x = 5;
// console.log(y);
// let y = 10;

// Parte 2
// function soma(a, b) {
//     if (a || b === 0) {
//         return "Erro: número inválido";
//     }
//     return a + b;
// }
// console.log(soma(2, 0));

// Parte 3
// function calcularPreco(tipo) {
//     let preco;

//     switch(tipo) {
//         case "eletrônico":
//             preco = 1000;
//         case "vestuário":
//             preco = 200;
//             break;
//         case "alimento":
//             preco = 50;
//             break;
//         default:
//             preco = 0;
//     }

//     return preco;
// }

// console.log(calcularPreco("eletrônico"));

// Parte 4
// let numeros = [1, 2, 3, 4, 5];

// let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

// console.log(resultado);

// Parte 5
// let lista = ["banana", "maçã", "uva", "laranja"];
// lista.splice(1, 2, "abacaxi", "manga");
// console.log(lista);

// Parte 6
// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     apresentar() {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }
// }

// class Funcionario extends Pessoa {
//     constructor(nome, idade, salario) {
//         super(nome, idade);
//         this.salario = salario;
//     }

//     apresentar() {
//         super.apresentar();
//         console.log(`Meu salário é R$ ${this.salario}.`);
//     }
// }

// function somaArray(numeros) {

//     var soma = 0; // Declarando a soma 

//     // Adicionando var no inicio e trocando de size para lenght
//     for (var i = 0; i < numeros.length; i++) {

//         // Somando corretamente
//         soma += 2 * numeros[i];
//     }
//     return soma;
// }
// console.log(somaArray([1, 2, 3, 4]));

class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    calcularDesconto() {
      return this.preco * 0.9; 
    }
  }
  
  class Livro extends Produto {
    constructor(nome, preco) {
      super(nome, preco);
      this.preco = preco;
    }
  
    calcularDesconto() {
      super.calcularDesconto();
         return this.preco * 0.8; 
    }
  }

const produto = new Produto("Celular", 1000);
console.log(`Preço com desconto do produto: R$ ${produto.calcularDesconto()}`);

const livro = new Livro("JavaScript Avançado", 150);
console.log(`Preço com desconto do livro: R$ ${livro.calcularDesconto()}`);