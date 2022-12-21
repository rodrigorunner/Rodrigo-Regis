# Ler dois números M e N (máximo = 10), e depois ler uma matriz MxN de números inteiros.
# Em seguida, mostrar na tela somente os números negativos da matriz. 
M = int(input("Qual a quantidade de linhas da matriz ? "))
N = int(input("Qual a quantidade de colunas da matriz ? "))

mat = [[0 for x in range(N)] for x in range(M)]

for i in range(0, M):
    for j in range(0, N):
        mat[i][j] = int(input(f"Elemento [{i},{j}]:"))

print("Valores Negativos: ")
for i in range(0, M):
    for j in range(0, N):
        if mat[i][j] < 0:
            print(f"{mat[i][j]}")