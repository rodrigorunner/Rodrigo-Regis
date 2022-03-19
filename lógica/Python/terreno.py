""" Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com duas casas decimais """

largura: float 
coprimento: float
metro_quadrado: float
valor: float
area: float

largura = float(input("Digite a largura do terreno: "))
comprimento = float(input("Digite o coprimento do terreno: "))
metro_quadrado = float(input("Digite o valor do metro quadrado: "))

area = largura * comprimento 
valor = area * metro_quadrado

print(f"Area do terreno: {area:.1f} ")
print(f"Preco do terreno: {valor:.2f}")