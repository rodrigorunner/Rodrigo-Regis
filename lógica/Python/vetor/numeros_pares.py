# Problema "numeros_pares" 
# Faça um programa que leia N números inteiros e armazene-os em um vetor. Em seguida, mostre # na tela todos os números pares, e também a quantidade de números pares. 

n: int = int(input('Quantos numeros voce vai digitar ? '))
vet: int = [0 for x in range(n)]
nPar: int; cont: int


for i in range(n):
    vet[i] = int(input('Digite um numero: '))

nPar = 0
cont = 0
print('NUMEROS PARES')
for i in range(n):
    if vet[i] % 2 == 0:
        print(f'{vet[i]}', end=" ")
        cont = cont + 1

print(f'\nQuantidade de pares = {cont}')
