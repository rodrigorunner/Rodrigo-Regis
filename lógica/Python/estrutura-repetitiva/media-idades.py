""" Faça um programa para ler um número indeterminado de dados, contendo cada um, a idade de um
indivíduo. O último dado, que não entrará nos cálculos, contém um valor de idade negativa. Calcular
e imprimir a idade média deste grupo de indivíduos. Se for entrado um valor negativo na primeira vez,
mostrar a mensagem "IMPOSSIVEL CALCULAR". """

print("Digite um número:")
idades = int(input())

if idades < 0:
    print("Impossível calcular.")
else:
    soma = 0
    npessoas = 0
    while idades >= 0:
        soma = soma + idades 
        npessoas = npessoas + 1
        idades = int(input())
    
    media = soma / npessoas

    print(f"Media = {media:.2f}")
        




