""" Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
valor restante conforme exemplo. """

preco = float(input("Preco unitario do produto: "))
unidade = int(input("Quantas unidades: "))
dinheiro = float(input("Dinheiro pago pelo cliente: "))
troco: float

if preco * unidade > dinheiro:
    faltam = preco * unidade - dinheiro
    print(f"Faltam R${faltam:.2f} reais")
else: 
    troco = dinheiro - preco * unidade
    print(f"Troco = R${troco:.2f}")

