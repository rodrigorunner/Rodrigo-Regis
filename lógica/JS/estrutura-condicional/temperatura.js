// Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para
// isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser
// informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala comduas casas decimais. A seguir é dada a fórmula para converter de Fahrenheit para Celsius.

let C, F, temp;

temp = 'F';

if(temp === 'F') {
    F = 75.00;
    C = (5 / 9) * (F - 32);  
    console.log('Temperatura equivalente em Celsius: ' + C.toFixed(2));
} else {
    C = 28.15;
    F = C * 9 / 5 + 32;
    console.log('Temperatura equivalento em Fahrenheit: ' + F.toFixed(2));
}


