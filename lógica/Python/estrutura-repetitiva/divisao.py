# Escreva um algoritmo que leia dois números e imprima o resultado da divisão do primeiro pelo 
# segundo. Caso não for possível, mostre a mensagem “DIVISAO IMPOSSIVEL”. 

n = int(input('Quantos casos você vai digitar ? '))

for i in range(0, n):
    numerador = int(input('Entre com um numerador: '))
    denominador = int(input('Entre com um denominador: '))

    if numerador < 0:
        print('DIVISAO IMPOSSIVEL') 
    else:
        divisao = numerador / denominador 
        print(f'Divisao = {divisao}')
