""" Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados com quatro casas decimais):
a) a área do quadrado que tem lado A
b) a área do triângulo retângulo que base A e altura B
c) a área do trapézio que tem bases A e B, e altura C """

a = float(input("Digite a medida A: "))
b = float(input("Digite a medida B: "))
c = float(input("Digite a medida C: "))

area = a * a 
triangulo = (a * b) / 2
trapezio = ((a + b) * c) / 2

print(f"AREA = {area:.4f}")
print(f"TRIANGULO = {triangulo:.4f}")
print(f"TRAPEZIO = {trapezio:.4f}")


