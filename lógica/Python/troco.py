""" Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve mostrar o valor do troco a ser devolvido ao cliente. """

preco_unitario = float(input("Preco unitario do produto: "))
quantidade = int(input("Quantidade comprada: "))
dinheiro_cliente = float(input("Dinheiro pago pelo cliente: "))

troco = dinheiro_cliente - (preco_unitario * quantidade)

print(f"Troco = {troco:.2f} reais")