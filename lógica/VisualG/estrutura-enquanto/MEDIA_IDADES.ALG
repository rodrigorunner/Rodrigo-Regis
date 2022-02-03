Algoritmo "media_idades"
// Disciplina   : [Lógica de Programação]
// Descrição   :  Ler uma determinada quantidade de idades e fazer o cálculo médio
// Autor(a)    : Rodrigo Regis
// Data atual  : 13-07-2021
Var

 idade, cont, soma : inteiro
 media : real

Inicio

 escreval("Digite as idades")
 leia(idade)
 
 cont <- 0
 soma <- 0
 
 enquanto idade >= 0 faca

     soma <- soma + idade
     cont <- cont + 1
     
     leia(idade)

 fimenquanto
 
 se cont = 0 entao
   escreval("Impossivel Calcular")
 senao
   media <- soma / cont
   escreva("MEDIA = ", media:4:2)
 fimse
 
Fimalgoritmo