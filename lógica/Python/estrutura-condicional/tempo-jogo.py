""" Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas. """

hinicial = int(input("Hora inicial: ")) 
hfinal = int(input("Hora final: ")) 

controler: int 

if hinicial < hfinal:
    controler = hfinal - hinicial 
else:
    controler = 24 - (hinicial - hfinal)

print(f"O jogo durou {controler} horas")



