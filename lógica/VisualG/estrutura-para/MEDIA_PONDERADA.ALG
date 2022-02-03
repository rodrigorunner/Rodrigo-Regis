Algoritmo "media_ponderada"

Var

   x, y, z, media, peso: real
   N, i: inteiro

Inicio

   escreva("Quantos casos voce vai digitar? ")
   leia(N)
   
   para i de 1 ate N faca
   
    escreval("Digite tres numeros:")
    leia(x)
    leia(y)
    leia(z)
    
    x <- x * 2
    y <- y * 3
    z <- z * 5
    
    media <- (x + y + z) / (2 + 3 + 5)
    escreval("Media = ", media:2:1)
   fimpara

Fimalgoritmo