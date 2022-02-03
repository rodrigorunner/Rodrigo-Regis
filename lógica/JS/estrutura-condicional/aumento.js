// Uma empresa vai conceder um aumento percentual de
// salário aos seus funcionários dependendo de quanto
// cada pessoa ganha. Fazer um
// programa para ler o salário de uma pessoa, daí mostrar
// qual o novo salário desta pessoa depois do aumento,
// quanto foi o aumento e qual foi a porcentagem de
// aumento.

let salario, novoSalario, porcentagem, aumento;

salario = 8000.01;

if(salario <= 1000) {
    porcentagem = 20;
    novoSalario = salario + ((salario / 100) * porcentagem);
    aumento = novoSalario - salario;
    console.log('Novo salário = R$ ' + novoSalario.toFixed(2));
    console.log('Aumento = R$ ' + aumento.toFixed(2))
    console.log('Porcentagem = ' + porcentagem + '%');
} else if(salario > 1000 && salario <= 3000) {
    porcentagem = 15;
    novoSalario = salario +((salario / 100) * porcentagem);
    aumento = novoSalario - salario;
    console.log('Novo salário = R$ ' + novoSalario.toFixed(2));
    console.log('Aumento = R$ ' + aumento.toFixed(2))
    console.log('Porcentagem = ' + porcentagem + '%');
} else if(salario > 3000 && salario <= 8000) {
    porcentagem = 10;
    novoSalario = salario + ((salario / 100) * porcentagem);
    aumento = novoSalario - salario;
    console.log('Novo salário = R$ ' + novoSalario.toFixed(2));
    console.log('Aumento = R$ ' + aumento.toFixed(2))
    console.log('Porcentagem = ' + porcentagem + '%');
} else {
    porcentagem = 5;
    novoSalario = salario + ((salario / 100) * porcentagem);
    aumento = novoSalario - salario;
    console.log('Novo salário = R$ ' + novoSalario.toFixed(2));
    console.log('Aumento = R$ ' + aumento.toFixed(2))
    console.log('Porcentagem = ' + porcentagem + '%');
}