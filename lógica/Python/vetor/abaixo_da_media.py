# Problema "abaixo_da_media" 
# Fazer um programa para ler um número inteiro N e depois um vetor de N números reais. 
# Em seguida, mostrar na tela a média aritmética de todos elementos com três casas decimais. 
# Depois mostrar todos os elementos do vetor que estejam abaixo da média, com uma casa decimal cada.

n: int = int(input("Quanto elementos vao ter no vetor ? "))
vet: float = [0 for x in range(n)]
media: float; soma: float; cont: int

for i in range(n):
    vet[i] = float(input('Digite um numero: '))

soma = 0
cont = 0
for i in range(n):
    soma = vet[i] + soma
    cont = cont + 1

media = soma / cont

print("")
print(f"Media do vetor = {media:.3f}")
print("Elementos abaixo da media")
for i in range(n):
    if vet[i] <= 10:
        print(f"{vet[i]:.1f}")

