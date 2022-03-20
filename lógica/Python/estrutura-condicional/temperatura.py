""" Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para isso, v indicando em qual escala vai ser informada uma temperatura. Em seguida o programa deve mostrar a tocê deve construir um programa que leia a letra "C" ou "F"emperatura na outra escala com duas casas decimais. """

celsius:float 
fahrenheit: float 

temp = str(input("Você vai digitar a temperatura em qual escala (C/F)? "))

if temp == 'F' or temp == 'f':
    fahrenheit = float(input("Digite a temperatura em Fahrenheit: "))

    celsius = 5.0 / 9.0 * (fahrenheit - 32.0)
    print(f"Temperatura equivalente em Celsius: {celsius:.2f}")
else: 
    celsius = float(input("Digite a temperatura em Celsius: "))

    fahrenheit = celsius * 9.0 / 5.0 + 32.0
    print(f"Temperatura equivalente em Fahrenheit: {fahrenheit:.2f}")


