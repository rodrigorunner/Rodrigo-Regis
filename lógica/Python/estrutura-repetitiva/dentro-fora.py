# Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida. 
# Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo

n = int(input('Quantos números você vai digitar ? '))

dentro = 0
fora = 0
for i in range(0, n):
    x = int(input('Digite um número: '))

    if x >= 10 and x <= 20:
        dentro = dentro + 1
    else:
        fora = fora + 1

print(f'{dentro} DENTRO')
print(f'{fora} FORA')

    


        

