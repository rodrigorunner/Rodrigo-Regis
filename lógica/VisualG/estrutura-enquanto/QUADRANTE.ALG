Algoritmo "quadrante"
// Disciplina  : Lógica de Programação
// Curso       : Udemy
// Descrição   : Ler as coordernadas x e y de uma quantidade indeterminada de pontos no
//               sistema cartesiano. Para cada ponto escrever o quadrante
//               a que ele pertence (Q1, Q2, Q3 ou Q4).
// Autor(a)    : Rodrigo Regis
// Data atual  : 28-07-2021
Var

  x, y: inteiro

Inicio

  escreval("Digite os valores de X e Y")
  leia(x)
  leia(y)
  
  enquanto x <> 0 faca
  
     se x = y entao
       escreval("Quadrante 1")
     senao
       se (x > 0) e (y < 0) entao
         escreval("Quadrante 4")
       senao
         se (x < 0) e (y < 0) entao
          escreval("Quadrante 3")
         senao
           se (x < 0) e (y > 0) entao
             escreval("Quadrante 2")
           fimse
         fimse
       fimse
     fimse
     
     escreval("Digite os valores de X e Y")
     leia(x)
     leia(y)
  
  fimenquanto

Fimalgoritmo