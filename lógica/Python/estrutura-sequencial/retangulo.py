""" Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor da área, perímetro e diagonal deste retângulo, com quatro casas decimais """

import math 

base: float
altura: float
area: float
perimetro: float
diagonal: float

base = float(input("Digite a base: "))
altura = float(input("Digite altura: "))

area = base * altura 
perimetro = 2 * (base + altura) 
diagonal = math.sqrt(base ** 2 + altura ** 2) 

print(f"Area: {area:.4f}")
print(f"Perimetro: {perimetro:.4f}")
print(f"Diagonal: {diagonal:.4f}")