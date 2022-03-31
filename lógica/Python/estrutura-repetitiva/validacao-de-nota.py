""" Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a
média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao
intervalo [0,10]). Cada nota deve ser validada separadamente. """

nota1 = float(input("Digite a primeira nota: "))

while nota1 < 0 or nota1 > 10:
    nota1 = float(input('Valor inválido! Tente novamente: '))

nota2 = float(input("Digite a segunda nota: "))

while nota2 < 0 or nota2 > 10:
    nota2 = float(input('Valor Inválido! Tente novamente: '))

media = (nota1 + nota2) / 2

print('Média = ', media)
