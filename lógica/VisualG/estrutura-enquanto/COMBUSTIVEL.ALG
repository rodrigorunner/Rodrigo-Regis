Algoritmo "combustivel"
// Disciplina  : L�gica de Programa��o
// Udemy       : Udemy
// Descri��o   : Um posto de combust�veis deseja determinar qual de seus produtos
//               tem a prefer�ncia de seus clientes.
//               Escreva um algoritmo para ler o tipo de combust�vel
//               abastecido (codificado da seguinte forma: 1.�lcool 2.Gasolina
//               3.Diesel 4.Fim).
// Autor(a)    : Rodrigo Regis
// Data atual  : 28-07-2021
Var

 alcool, gasolina, diesel, codigo: inteiro
 
Inicio
    escreva("Informe um codigo (1,2,3) ou 4 para parar:")
    leia(codigo)

    alcool   <- 0
    gasolina <- 0
    diesel   <- 0
    enquanto codigo <> 4 faca
        se codigo = 1 entao
          alcool <- alcool + 1
        senao
          se codigo = 2 entao
            gasolina <- gasolina + 1
          senao
            se codigo = 3 entao
              diesel <- diesel + 1
            fimse
          fimse
        fimse

        escreva("Informe um codigo (1,2,3) ou 4 para parar:")
        leia(codigo)
    fimenquanto
    escreval("MUITO OBRIGADO")
    escreval("Alcool:", alcool)
    escreval("Gasolina:", gasolina)
    escreval("Diesel:", diesel)
Fimalgoritmo