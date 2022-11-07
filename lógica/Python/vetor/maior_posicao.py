# Problema "maior_posicao" 
# Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida, mostrar na tela o maior número do vetor (supor não haver empates). 
# Mostrar também a posição do maior #elemento, considerando a primeira posição como 0 (zero). 

n = int(input('Quantos numeros voce vai digitar ? '))
vet = [0 for x in range(n)]

for i in range(n):
    vet[i] = int(input('Digite um numero: '))

maior = vet[0]
pos = 0
for i in range(n):
    if vet[i] > maior:
        maior = vet[i]
        pos = i

print(f"Maior valor = {maior}")
print(f"Posicao do maior valor = {pos}")