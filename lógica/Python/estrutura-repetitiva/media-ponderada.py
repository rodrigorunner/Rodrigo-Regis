# Leia um valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de 
# teste consiste de 3 valores reais, para os quais você deverá calcular e mostrar a média ponderada, sendo 
# que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5. Vale lembrar 
# que a média ponderada é a soma de todos os valores multiplicados pelo seu respectivo peso, dividida 
# pela soma dos pesos.

n = int(input('Quantos casos você vai digitar ? '))

media = 0
for i in range(0, n):
    num = print(f'Digite {n} números: ')
    x = float(input())
    y = float(input())
    z = float(input())

    media = (x + y + z) / n
    print(f'Média = {media:.2f}')
