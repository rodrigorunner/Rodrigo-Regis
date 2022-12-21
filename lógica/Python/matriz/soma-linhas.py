# Fazer um programa para ler dois números inteiros M e N (máximo = 10). Em seguida, ler uma matriz de M linhas e N colunas contendo números reais. Gerar um vetor de modo que cada elemento do vetor seja a soma dos elementos da linha correspondente da matriz. Mostrar o vetor gerado. 

M = int(input("Qual a quantidade de linhas da matriz ? "))
N = int(input("Qual a quantidade de colunas da matriz ? "))

mat = [[0 for x in range(N)] for x in range(M)]
vet = [0 for x in range(M)]

for i in range(0, M):
    print(f"Digite os elementos da {i+1}º linha:")
    for j in range(0, N):
       mat[i][j] = float(input(""))

for i in range(0, M):
    for j in range(0, N):
        vet[i] = vet[i] + mat[i][j]

print("Vetor Gerado:")
for i in range(0, M):
    print(f"{vet[i]:.1f}")

