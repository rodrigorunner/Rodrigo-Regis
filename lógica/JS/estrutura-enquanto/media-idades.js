// Faça um programa para ler um número indeterminado de dados, contendo cada um, a idade de um
// indivíduo. O último dado, que não entrará nos cálculos, contém um valor de idade negativa. Calcular
// e imprimir a idade média deste grupo de indivíduos. Se for entrado um valor negativo na primeira vez,
// mostrar a mensagem "IMPOSSIVEL CALCULAR".

let idade, cont, media, soma;

idade = parseFloat(prompt('Digite as idades'));
if(idade < 0) {
    console.log('Impossível Calcular');
}

media = 0;
soma = 0;
cont = 0;
while(idade > 0) {

    soma += idade;

    cont++;

    idade = parseFloat(prompt('Digite as idades'));

}

media = soma / cont;
console.log('Média das idades: ' + media.toFixed(2));