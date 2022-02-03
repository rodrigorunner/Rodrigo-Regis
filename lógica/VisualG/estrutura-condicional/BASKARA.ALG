Algoritmo "Baskara"
// Disciplina   : Lógica de Programação
// Curso       : Udemy
// Descrição   : Fazer um programa para ler os três coeficientes do 2 grau,
//               e se a equação não apresentar raízes reais, mostre uma mensagem.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

 a, b, c, x1, x2, delta : real

Inicio

   escreval("Coeficiente A")
   leia(a)
   
   escreval("Coeficiente B")
   leia(b)
   
   escreval("Coeficiente C")
   leia(c)
   
   delta <- (b * b) - (4 * a * c)
   
   se delta < 0 entao
     escreva("Equacao nao possui raizes reais")
   senao
     x1 <- ((-b) + RaizQ(delta)) / (2 * a)
     x2 <- ((-b) - RaizQ(delta)) / (2 * a)
     escreval("X1 = ", x1:2:4)
     escreval("X2 = ", x2:2:4)
   fimse

Fimalgoritmo