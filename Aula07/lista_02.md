# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q 1) && (r  2 > p) || (q  r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?

A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.

B) O código avalia a expressão booleana, imprime `false`, calcula o produto dos números na lista e imprime o resultado no console.

C) O código avalia a expressão booleana, imprime `` e, em seguida, verifica se o número 6 está na lista.

D) O código avalia a expressão booleana, imprime `` e ordena os valores em ordem crescente.

A resposta é a letra A. Pois o código retorna `true` ao fazer a primeira verificação, e depois, calcula o produto dos números na lista e imprime o resultado no console.

______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = -5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'

B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

C) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.', enquanto analisarCredito2() exibirá: 'Seu crédito foi aprovado. Saldo disponível: 100.'

D) Ambas as funções exibirão: 'Seu crédito foi aprovado Saldo disponível: 500.'

A resposta é a letra A. Pois o total das compras é de 4600 e o limite é de 5000, ou seja, será aprovado. O resto será de 400.
______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

A) O código verifica se a idade indica um adulto ou um idoso e exibe a mensagem correspondente.

B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".

C) O código verifica se a idade está entre 18 e 60 anos e, se for, imprime "Você é um adulto!". Se não estiver nesse intervalo, imprime "Você está na melhor idade!".

D) O código verifica se a idade é menor de 18, entre 18 e 60 ou acima de 60, imprimindo uma mensagem específica para cada caso.

A resposta é a letra B. O código verifica se a idade está entre 18 e 59 anos e, se for, imprime "Você é um adulto!". Se tiver menos de 18, imprime "Você é menor de idade!". Se for 60 ou mais, imprime "Você está na melhor idade!".
______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo "  (i+1)  " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo "  (i+1)  " ligado com bateria extra. Energia restante: " + ((energiaDisponivel  bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo "  (i+1)  " não pode ser ligado. Energia insuficiente.");
    }
}
```

Escolha a opção que responde corretamente:

A)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 ligado com bateria extra. Energia restante: 0

Dispositivo 5 ligado. Energia restante: -200

B)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

C)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 400

Dispositivo 4 não pode ser ligado. Energia insuficiente.

D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.


A resposta é a letra D, pois ao calcular da primeira vez sobra 900. Da segunda vez (1200 - (300+ 600)) sobrou 300. Da terceira vez sobrou 200 e depois disso, não tinha mais energia suficiente.
______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.

B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.

C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente.

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo.

A resposta é a letra B: O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.
______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.

B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

A resposta é a letra A. O Matter.js Physics é uma biblioteca de física que pode ser integrada ao Phaser.js para simular física realista nos jogos, lidando com colisões, forças, gravidade, entre outros.
______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

```
valor -> 0

Se valor for menor que 50 então
    Imprima "Frete não disponível!"
Senão, se valor se for maior ou igual a 50 e menor ou igual a 199.99 
Então
    Imprima "Frete com custo adicional!"
Senão
    Imprima "Frete grátis!
Fim
```
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.

```
Classe Carro herda de Veiculo:

Atributos:
quilometragem
eficienciaCarro

Método Construtor(modelo, ano, quilometragem, eficienciaCarro):
    Chamar o construtor da classe Veiculo(modelo, ano)
    Definir quilometragem = quilometragem
    Definir eficienciaCarro = eficienciaCarro

Método CalcularConsumo():
    consumo = quilometragem / eficienciaCarro
    Retornar "Consumo do Carro: " + consumo

Classe Moto herda de Veiculo:

Atributos:

quilometragem
eficienciaMoto

Método Construtor(modelo, ano, quilometragem, eficienciaMoto):
    Chamar o construtor da classe Veiculo(modelo, ano)
    Definir quilometragem = quilometragem
    Definir eficienciaMoto = eficienciaMoto

Método CalcularConsumo():
    consumo = quilometragem / eficienciaMoto
    Retornar "Consumo da Moto: " + consumo
______
```

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórmula de atualização velocidade:
```
    velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.

```
Início
  
    velocidadeInicial = valorInicialVelocidade 
    desaceleracao = valorDesaceleracao 
    velocidadeSegura = valorVelocidadeSegura 
    tempoMaximo = valorTempoMaximo 
    tempoMinimo = valorTempoMinimo 

    tempo = 0
    velocidade = velocidadeInicial

    Enquanto velocidade maior que velocidadeSegura E tempo menor que tempoMaximo:
        tempo = tempo + 1 
        velocidade = velocidadeInicial - desaceleracao * tempo 

        Se velocidade menor que velocidadeSegura então
            Imprimir "Velocidade segura atingida em " + tempo + " segundos"
            Parar
        FimSe

        Se tempo maior que tempoMaximo então
            Imprimir "Tempo máximo de descida ultrapassado. Pouso não seguro."
            Parar
        FimSe

        Se desaceleracao * tempo menor que tempoMinimo então
            Imprimir "Desaceleração insuficiente. Ajuste necessário para evitar instabilidade."
            Parar
        FimSe
    FimEnquanto
Fim
```

______

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    Se tamanho(matrizA) diferente do tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhas, colunas)  

        Para i de 0 até linhas-1 faça:  
            Para j de 0 até colunas-1 faça:  
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]  

        Retornar matrizResultado  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.

```
Função MultiplicarMatrizesInvestimento(matrizA, matrizB):
    Se tamanho(matrizA[0]) != tamanho(matrizB) então:
        Retornar "As matrizes não podem ser multiplicadas. O número de colunas da matriz A deve ser igual ao número de linhas da matriz B."
    Senão:
        linhasA <- tamanho(matrizA)
        colunasA <- tamanho(matrizA[0])
        colunasB <- tamanho(matrizB[0])

        matrizResultado <- novaMatriz(linhasA, colunasB)

        Para i de 0 até linhasA-1 faça:
            Para j de 0 até colunasB-1 faça:
                soma <- 0
                Para k de 0 até colunasA-1 faça:
                    soma <- soma + matrizA[i][k] * matrizB[k][j]
                FimPara
                matrizResultado[i][j] <- soma

        Retornar matrizResultado
        
investimentosAno1 <- [[1000, 2000], [1500, 2500]]
fatoresCrescimento <- [[1.1, 0.9], [1.05, 1.2]]

impactoInvestimentos <- MultiplicarMatrizesInvestimento(investimentosAno1 fatoresCrescimento)

Escrever("Impacto dos investimentos ao longo do tempo:")
ImprimirMatriz(impactoInvestimentos)

```