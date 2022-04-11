# Fazer um programa para ler um número natural N (valor máximo: 15), e depois calcular e mostrar o 
# fatorial de N. 

n = int(input('Digite o valor de N: '))

fatorial = 1
for i in range(n, 0, -1):
    fatorial = fatorial * i 

print(f'Fatorial = {fatorial}')