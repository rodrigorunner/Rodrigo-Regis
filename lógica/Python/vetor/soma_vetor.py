# Problema "soma_vetor" 
# Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida: 
# - Imprimir todos os elementos do vetor 
# - Mostrar na tela a soma e a média dos elementos do vetor
n: int 
soma: int = 0
media: int = 0

n = int(input('Quantos numeros voce vai digitar ? '))
vet = [0 for x in range(n)]

# Armazenar os números no vetor
for i in range(n):
    vet[i] = int(input('Digite um numero: '))

# Quebra de linha 
print()
# Printar os valores
print('VALORES: ', end=" ")
# Mostrar os valores armazenados no vetor
for i in range(n):
    print(f"{vet[i]:.1f}", end="  ")

# Cálculos aritméticos
for i in range(n):
    soma = vet[i] + soma
    media = soma / n

print()
print(f"SOMA = {soma:.2f}")
print(f"MEDIA = {media:.2f}")






