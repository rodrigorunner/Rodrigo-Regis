Algoritmo "Retangulo"
// Disciplina   : Lógica de Programação
// Curso        : Udemy
// Descrição    : Fazer um programa para ler base e altura do retângulo
// Autor(a)     : Rodrigo Regis
// Data atual   : 14-07-2021
Var

   base, altura, area, perimetro, diagonal: real
   

Inicio

   escreval("Base do retangulo")
   leia(base)

   escreval("Altura do retangulo")
   leia(altura)

   area <- base * altura
   perimetro <- (2 * base) + (2 * altura)
   diagonal <- RaizQ(base * base + altura * altura)

   escreval("Area do retangulo: ", area:2:4)
   escreval("Petrimetro: ", perimetro:2:4)
   escreval("Diagonal: ", diagonal:2:4)


Fimalgoritmo