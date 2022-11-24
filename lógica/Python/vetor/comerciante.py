# Problema "comerciante" 
# Um comerciante deseja fazer o levantamento do lucro das mercadorias que ele comercializa. 
# Para isto, mandou digitar um conjunto de N mercadorias, cada uma contendo nome, preço de compra e preço de venda das mesmas. 
# Fazer um programa que leia tais dados e determine e escreva quantas mercadorias 
# proporcionaram: 
# lucro < 10% 
# 10% ≤ lucro ≤ 20% 
# lucro > 20% 

n: int = int(input('Quantas mecadorias voce vai digitar ? '))
vetNome = [0 for x in range(n)]
vetCompra: float = [0 for x in range(n)]
vetVenda: float = [0 for x in range(n)]
porc: float; lucro: str

for i in range(n):
    print(f'Produdo {i+1}')
    vetNome[i] = input('Nome do produto: ')
    vetCompra[i]: float = float(input('Valor da compra: '))
    vetVenda[i]: float = float(input('Valor da venda: ')) 
    menor = 0; entre = 0; maior = 0

for i in range(n):
    porc = (vetCompra[i] / 100) * vetVenda[i]
    if porc < 1.0:
        menor = menor + 1
    elif porc >= 1.0 and porc <= 2.0:
        entre = entre + 1
    elif porc > 2.0:
        maior = maior + 1

print("RELATORIO:")
print(f"Lucro abaixo de 10%: {menor}")
print(f"Lucro abaixo entre 10% e 20%: {entre}")
print(f"Lucro abaixo acima de 20%: {maior}")

        
        
        






