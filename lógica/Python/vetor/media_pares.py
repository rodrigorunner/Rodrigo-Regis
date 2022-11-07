# Problema "media_pares" 
# Fazer um programa para ler um vetor de N números inteiros. Em seguida, mostrar na tela a média aritmética somente dos números pares lidos, com uma casa decimal.
# Se nenhum número par for digitado, mostrar a mensagem "NENHUM NUMERO PAR".

n: int = int(input("Quantos elementos vão ter o vetor ? "))
vet: float = [0 for x in range(n)]
media: float; cont: float; soma: float; 

for i in range(n):
    vet[i] = float(input("Digite um numero: "))

cont = 0
soma = 0
for i in range(n):
    if vet[i] % 2 == 0:
        soma = vet[i] + soma
        cont = cont + 1

if cont == 0:
    print('NENHUM PAR ENCONTRADO')
else:
    media = soma / cont
    print(f"MEDIA = {media:.1f}")




        
    

