""" Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três
números lidos. Em caso de empate, mostrar apenas uma vez. """

x = int(input("Primeiro inteiro: "))
y = int(input("Segundo inteiro: "))
z = int(input("Terceiro inteiro: "))
menor: int

if x < y and x < z:
    menor = x 
elif  y < z:
    menor = y
else:
    menor = z 

print(f"MENOR = {menor}")




