# Problema "dados_pessoas" 
# Tem-se um conjunto de dados contendo a altura e o gênero (M, F) de N pessoas.
# Fazer um programa  que calcule e escreva a maior e a menor altura do grupo, a média de altura das mulheres, e o número de homens. 

n: int = int(input('Quantas pessoas serao digitadas ? '))
vetAltura = [0 for x in range(n)]
vetGereno = [0 for x in range(n)]
cont: int; media: float; soma: float; contM: int

for i in range(n):
    vetAltura[i]: float = float(input(f'Altura da {i+1}º pessoa: '))
    vetGereno[i] = input(f'Genero da {i+1}º pessoa: ')

menor = vetAltura[0]
maior = vetAltura[0]
for i in range(n):
    if vetAltura[i] < menor:
        menor = vetAltura[i]
    elif vetAltura[i] > maior:
        maior = vetAltura[i]

soma = 0
cont = 0
contM = 0
for i in range(n):
    if vetGereno[i] == "F":
        soma = vetAltura[i] + soma
        cont = cont + 1
    elif vetGereno[i] == "M":
        contM = contM + 1

media = soma / cont

print(f"Menor altura = {menor}")
print(f"Maior altura = {maior}")
print(f"Media das alturas das mulheres = {media:.2f}")
print(f"Quantidade de homens = {contM}")

