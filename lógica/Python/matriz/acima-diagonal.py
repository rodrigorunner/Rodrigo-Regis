# Ler um inteiro N (máximo = 10) e uma matriz quadrada de ordem N 
# contendo números inteiros. Mostrar a soma dos elementos acima da 
# diagonal principal.

N = int(input("Qual a ordem da matriz ? "))

mat = [[0 for x in range(N)] for x in range(N)]

for i in range(N):
    for j in range(N):
        mat[i][j] = int(input(f"Elemento[{i},{j}]: "))

diagonal = 0
for i in range(0, N):
    for j in range(i + 1, N):
        diagonal = diagonal + mat[i][j]

print(f"Soma dos elementos acima da diagonal principal = {diagonal}")

