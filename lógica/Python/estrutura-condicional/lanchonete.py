""" Uma lanchonete possui vários produtos. Cada produto possui um código e um preço. Você deve fazer um programa para ler o código e a quantidade comprada de um produto (suponha um código válido), e daí informar qual o valor a ser pago, com duas casas decimais """

codigo = int(input("Digite o código do produto: "))
quantidade = int(input("Digite quantidade comprada: "))
valor: float 

if codigo == 1:
    valor = quantidade * 5
elif codigo == 2:
    valor = quantidade * 3,50
elif codigo == 3:
    valor = quantidade * 4.80
elif codigo == 4:
    valor = quantidade * 8.90 
elif codigo == 5:
    valor = quantidade * 7.32
else:
    print("Código não existe")

print(f"Valor a ser pago: R${valor:.2f}")