Algoritmo "Pagamento"
// Disciplina   : L�gica de Programa��o
// Curso        : Udemy
// Descri��o    : Fazer um programa para ler o nome do funcion�rio, sal�rio por
//                hora, quantidade de horas trabalhadas e mostrar o sal�rio.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   nome : caractere
   salario, horas, total: real

Inicio

   escreval("Nome do funcionario")
   leia(nome)
   
   escreval("Salario por hora")
   leia(salario)
   
   escreval("Quantidade de horas trabalhadas")
   leia(horas)
   
   total <- salario * horas
   
   escreva("O pagamento de ", nome, " deve ser R$", total:2:2)

Fimalgoritmo