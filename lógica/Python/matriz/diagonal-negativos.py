# Fazer um programa para ler um número inteiro N (máximo = 10) e uma matriz quadrada de ordem N contendo números inteiros. Em seguida, mostrar a diagonal principal e a quantidade de valores negativos da matriz. 

N = int(input("Qual a ordem da matriz ? "))
mat = [[0 for x in range(N)] for x in range(N)]

for i in range(0, N):
    for j in range(0, N):
        mat[i][j] = int(input(f"Elemento[{i},{j}]: "))

# O valor da Diagonal Principal corresponde ao mesmo valor da coluna e linha.
# [0, 0], [1, 1], [2, 2]
print("Diagonal Principal:")
for i in range(0, N):
    print(f"{mat[i][i]} ", end="")

# Se o valor for menor do que zero ele é negativo.
negativos = 0
for i in range(0, N):
    for j in range(0, N):
        if mat[i][j] < 0:
            negativos = negativos + 1

print("")
print(f"Quantidade de negativos: {negativos}")