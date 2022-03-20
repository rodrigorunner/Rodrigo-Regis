""" No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir. Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual foi a maior. """

x = float(input("Primeira tentativa: "))
y = float(input("Segunda tentativa: "))
z = float(input("Terceira tentativa: "))

maior: float
if x > y and x > z:
    maior = x 
elif y > z:
    maior = y 
else:
    maior = z 

print(f"Maior distância: {maior:.2f}")
