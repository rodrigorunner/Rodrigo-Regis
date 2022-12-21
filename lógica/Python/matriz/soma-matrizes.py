# Fazer um programa para ler duas matrizes de números inteiros A e B, contendo de M linhas e N colunas cada (M e N máximo = 10).
# Depois, gerar uma terceira matriz C onde cada elemento desta é a soma dos elementos correspondentes das matrizes originais. Imprimir na tela a matriz gerada.

M = int(input("Quantas linhas vao ter cada matriz ? "))
N = int(input("Quantas colunas vao ter cada matriz ? "))

matA = [[0 for x in range(N)] for x in range(M)]
matB = [[0 for x in range(N)] for x in range(M)]
matC = [[0 for x in range(N)] for x in range(M)]

print("Digite os valores da matriz A")
for i in range(0, M):
    for j in range(0, N):
        matA[i][j] = int(input(f"Elemento[{i},{j}]: "))


print("Digite os valores da matriz B")
for i in range(0, M):
    for j in range(0, N):
         matB[i][j] = int(input(f"Elemento[{i},{j}]: "))

for i in range(0, M):
    for j in range(0, N):
        matC[i][j] = matA[i][j] + matB[i][j]

print("MATRIZ SOMA")
for i in range(0, M):
    for j in range(0, N):
        print(f"{matC[i][j]} ", end="")
    print()


