Algoritmo "combustivel"
// Disciplina  : Lógica de Programação
// Udemy       : Udemy
// Descrição   : Um posto de combustíveis deseja determinar qual de seus produtos
//               tem a preferência de seus clientes.
//               Escreva um algoritmo para ler o tipo de combustível
//               abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina
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