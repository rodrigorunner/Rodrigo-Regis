""" Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do círculo com três casas decimais. """

import math 

raio = float(input("Digite o valor do raio do circulo: "))

area = math.pi * raio**2

print(f"AREA = {area:.3f}")