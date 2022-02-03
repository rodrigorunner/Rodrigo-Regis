// Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma
// mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente. O
// programa deve finalizar quando forem digitados dois valores iguais.

let x, y, msg;

x = parseInt(prompt('Digite um número X'));
y = parseInt(prompt('Digite um número Y'));

while(x !== y) {

    if(x > y) {
        console.log('Decrescente ');
    } else {
        console.log('Crescente');
    }
    
    x = parseInt(prompt('Digite outro número X'));
    y = parseInt(prompt('Digite outro número Y'));
   
}