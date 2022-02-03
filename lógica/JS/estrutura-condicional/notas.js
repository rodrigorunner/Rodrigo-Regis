// Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de
// uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no
// ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a
// mensagem "REPROVADO"

let nota1, nota2, media;

nota1 = 34;
nota2 = 23.3;

media = nota1 + nota2;
console.log('MÈDIA: ' + media);

if(media < 60) {
    console.log('REPROVADO');
}

