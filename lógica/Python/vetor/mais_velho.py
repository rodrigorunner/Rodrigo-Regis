# Problema "mais_velho" 
# Fazer um programa para ler um conjunto de nomes de pessoas e suas respectivas idades. 
# Os nomes devem ser armazenados em um vetor, e as idades em um outro vetor.
#  Depois, mostrar na tela o nome da pessoa mais velha.
maisVelho: int; nome: str
n = int(input("Quantas pessoas voce vai digitar ? "))
vetNome = [0 for x in range(n)]
vetIdade = [0 for x in range(n)]

for i in range(n):
    print(f"Dados da {i+1}º pessoa: ")
    vetNome[i] = input("Nome: ")
    vetIdade[i] = int(input("Idade: "))

maisVelho = vetIdade[0]
nome = vetNome[0]
for i in range(n):
    if vetIdade[i] > maisVelho:
        maisVelho = vetIdade[i]
        nome = vetNome[i]

print(f"Pessoa mais velha = {nome}")