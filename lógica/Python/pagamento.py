""" Fazer um programa o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com uma mensagem explicativa """

nome = input("Nome do funcionário: ")
valor = float(input("Valor que recebe por hora: "))
quantidade = int(input("Digite quantidade de horas: "))

total = valor * quantidade 

print(f"O pagamento de {nome} de ser R${total:.2f} reais")