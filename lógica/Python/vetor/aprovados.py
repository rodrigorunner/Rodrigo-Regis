# Problema "aprovados" 
# Fazer um programa para ler um conjunto de N nomes de alunos, bem como as notas que eles tiraram no 1º e 2º semestres. Cada uma dessas informações deve ser armazenada em um vetor.
# Depois, imprimir os nomes dos alunos aprovados, considerando aprovados aqueles cuja média das notas seja maior ou igual a 6.0 (seis).

n: int = int(input('Quantos alunos serao digitados ? '))
vetNotaA: float = [0 for x in range(n)]
vetNotaB: float = [0 for x in range(n)]
vetNome: float = [0 for x in range(n)]
media: float; cont: int
soma: float

for i in range(n):
    print(f'Digite nome, primeira e segunda nota do {i+1}º aluno')
    vetNome[i] = input('')
    vetNotaA[i] = float(input(''))
    vetNotaB[i] = float(input(''))

soma = 0
cont = 2
print('Alunos Aprovados: ')

for i in range(n):
    soma = vetNotaA[i] + vetNotaB[i]
    media = soma / cont
    if media >= 6.0:
        print(f'{vetNome[i]}')



