""" Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os números podem ser digitados em qualquer ordem. """

print("Digite dois números inteiros:")
num1 = int(input())
num2 = int(input())

if num1 % num2 == 0 or num2 % num1 == 0:
    print("São múltiplos")
else:
    print("Não são múltiplos")