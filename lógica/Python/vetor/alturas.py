# Problema "alturas" 
# Fazer um programa para ler nome, idade e altura de N pessoas. Depois, mostrar na tela a altura  média das pessoas, e mostrar também a porcentagem de pessoas com menos de 16 anos, bem como os nomes dessas pessoas caso houver.

n: int = int(input("Quantas pessoas serao digitadas ? ")) 

nomes: str = [0 for x in range(n)]  
idades: int = [0 for x in range(n)]
alturas: float = [0 for x in range(n)]

for i in range(n):
    print(f"Dados da {i+1}a pessoa")
    nomes[i] = str(input('Nome: '))
    idades[i] = int(input('Idade: '))
    alturas[i] = float(input('Altura: '))

alturaTotal = 0
menor = 0
for i in range(n):
    if idades[i] < 16:
        menor = menor + 1
        alturaTotal = alturaTotal + alturas[i]

alturaMedia = alturaTotal/menor
percentual = (float(menor)/n) * 100.0

print(f"\nAltura media = {alturaMedia:.2f}")
print(f"Pessoas com menos de 16 anos: {percentual:.1f}%")

for i in range(n):
    if idades[i] < 16:
        print(nomes[i])