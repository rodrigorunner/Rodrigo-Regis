Algoritmo "pares-consecutivos"
// Disciplina  : L�gica de Programa��o
// Curso       : Udemy
// Descri��o   : O programa deve ler um valor inteiro X indefinidas vezes. (O programa ir� parar quando o valor de X
//               for igual a 0). Para cada X lido, imprima a soma dos 5 pares
//               consecutivos a partir de X, inclusive o X, se for par.
//               Se o valor de entrada for 4, por exemplo, a sa�da deve ser 40,
//               que � o resultado da opera��o:
//               4+6+8+10+12, enquanto que se o valor de entrada for 11,
//               por exempo, a sa�da deve ser 80, que � a soma de 12+14+16+18+20.
// Autor(a)    : Rodrigo Regis
// Data atual  : 28-07-2021
Var

  x: inteiro

Inicio

  escreva("Digite um numero inteiro:")
  leia(x)
  
  enquanto x <> 0 faca
  
    se x % 2 = 0 entao
     x <- x * 5 + 20
    senao
     x <- (x+1) * 5 + 20
    fimse

    escreval("SOMA = ", x)
    
    escreva("Digite um numero inteiro:")
    leia(x)
  fimenquanto

Fimalgoritmo