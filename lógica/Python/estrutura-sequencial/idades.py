""" Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os nomes e a idade média entre essas pessoas, com uma casa decimal """

nome1 = input("Nome da primeira pessoa: ")
idade1 = int(input("Idade da primeira pessoa: "))

nome2 = input("Nome da segunda pessoa: ")
idade2 = int(input("Idade da segunda pessoa: "))

media = (idade1 + idade2) / 2 

print(f"A idade media entre {nome1} e {nome2} eh de {media:.1f} anos")