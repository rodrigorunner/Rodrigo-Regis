algoritmo "alturas"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a): Nelio Alves
// Descrição   : Fazer um programa para ler nome, idade e altura de N
//               pessoas. Depois, mostrar na
//               tela a altura média das pessoas, e mostrar também
//               a porcentagem de pessoas com menos de 16 anos,
//               bem como os nomes dessas pessoas caso houver
// Autor(a)    : Rodrigo Regis
// Data atual  : 13/08/2021
var
     N, i, cont: inteiro
     nomes: vetor[0..4] de caractere
     idades: vetor[0..4] de inteiro
     alturas: vetor[0..4] de real
     media, porce, soma: real
inicio

     escreva("Quantas pessoas serão digitadas? ")
     leia(N)
     
     para i de 0 ate N-1 faca
        escreval("Dados da ", i+1,"a", " pessoa:")
        escreva("Nome: ")
        leia(nomes[i])
        escreva("Idade: ")
        leia(idades[i])
        escreva("Altura: ")
        leia(alturas[i])
     fimpara
     
     soma <- 0
     para i de 0 ate N-1 faca
        soma <- soma + alturas[i]
     fimpara
     media <- soma / N
     escreval("Altura media: ", media:4:2)
     
     cont <- 0
     para i de 0 ate N-1 faca
        se idades[i] < 16 entao
          cont <- cont + 1
        fimse
     fimpara
     
     porce <- cont * 100 / N
     escreval("Pessoas com menos de 16 anos: ", porce:3:1, "%")
     
     para i de 0 ate N-1 faca
        se idades[i] < 16 entao
          escreval(nomes[i])
        fimse
     fimpara
     

fimalgoritmo