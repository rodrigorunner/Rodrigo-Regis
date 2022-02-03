Algoritmo "Idades"
// Disciplina  : Lógica de Programação
// Curso       : Udemy
// Descrição   : Fazer um programa para ler duas idades e fazer,
//               um cálculo médio entre as idades.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   nome1, nome2 : caractere
   idade1, idade2 : inteiro
   media : real
   

Inicio

     escreval("Dados da primeira pessoa")
     leia(idade1)
     leia(nome1)
     
     escreval("Dados da segunda pessoa")
     leia(idade2)
     leia(nome2)
     
     media <- (idade1 + idade2) / 2
     
     escreva(" A idade media entre ", nome1, " e ", nome2, " eh ", media, " anos.")
   
Fimalgoritmo