# Problema "negativos" 
# Faça um programa que leia um número inteiro positivo N (máximo = 10) e depois N números inteiros e armazene-os em um vetor. Em seguida, mostrar na tela todos os números negativos lidos. 

n:int

n = int(input('Quantos numeros voce vai digitar ? '))
vet = [0 for x in range(n)] 

for i in range(n):
    vet[i] = int(input('Digite um numero: '))

for i in range(0, n):
    if vet[i] < 0: 
     print(f"{vet[i]}")


