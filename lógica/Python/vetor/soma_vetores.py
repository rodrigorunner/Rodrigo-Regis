# Problema "soma_vetores" 
# Faça um programa para ler dois vetores A e B, contendo N elementos cada. 
# Em seguida, gere um terceiro vetor C onde cada elemento de C é a soma dos elementos correspondentes de A e B. 
# Imprima o vetor C gerado.

n = int(input('Quantos valores vão ter cada vetor ? '))
vetA = [0 for x in range(n)]
vetB = [0 for x in range(n)]
vetC = [0 for x in range(n)]
soma: int

for i in range(n):
    vetA[i] = int(input('Digite os valores do vetor A: '))

for i in range(n):
    vetB[i] = int(input('Digite os valores do vetor B: '))

for i in range(n):
    vetC[i] = vetA[i] + vetB[i]

print("VETOR RESULTANTE:")
for i in range(n):
    print(f"{vetC[i]}")
