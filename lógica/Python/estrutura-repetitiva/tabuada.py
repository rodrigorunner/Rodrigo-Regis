# Ler um número inteiro N, daí mostrar na tela a tabuada de N para 1 a 10

n = int(input('Digite um número: '))

for i in range(1, 11):
    tabuada = n * i
    print(f'{n} x {i} = {tabuada}')