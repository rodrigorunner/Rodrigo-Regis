# Ler um inteiro N e uma matriz quadrada de ordem N (máximo = 10). Mostrar qual o maior elemento de cada linha. Suponha não haver empates. 

N = int(input("Qual a ordem da matriz ? "))

mat = [[0 for x in range(N)] for x in range(N)]
vet = [0 for x in range(N)]

for i in range(0, N):
    for j in range(0, N):
        mat[i][j] = int(input(f"Elemento[{i},{j}]: "))

for i in range(0, N):
    maior = mat[i][i]
    for j in range(0, N):
        if mat[i][j] > maior:
            vet[i] = mat[i][j]
            maior = vet[i]

print("MAIOR ELEMENTO DE CADA LINHA:")
for i in range(0, N):
    print(f"{vet[i]}")
