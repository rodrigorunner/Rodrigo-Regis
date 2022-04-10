# Leia um valor inteiro N. Este valor será a quantidade de números inteiros que serão lidos em seguida. 
# Para cada valor lido, mostre uma mensagem dizendo se este valor lido é PAR ou IMPAR, e também 
# se é POSITIVO ou NEGATIVO. No caso do valor ser igual a zero (0), seu programa deverá imprimir 
# apenas NULO. 

n = int(input('Quantos números você vai digitar ? '))

for i in range(0, n):
    n = int(input('Digite um número: '))

    if n == 0:
        print('NULO')
    elif n % 2 != 0 and n < 0:
        print('IMPAR NEGATIVO')
    elif n % 2 != 0 and n > 0:
        print('IMPAR POSITIVO')
    elif n % 2 == 0 and n < 0:
        print('PAR NEGATIVO')
    else:
        print('PAR POSITIVO')