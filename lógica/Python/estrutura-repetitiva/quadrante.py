""" Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no
sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence (Q1, Q2, Q3 ou Q4). O
algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem
escrever mensagem alguma). """

print("Digite as coordenadas:")
x = int(input())
y = int(input())

cont: int
while x != 0 and y != 0:
     if x == y:
         print('Quadrante Q1')
     elif x > 0 and y < 0:
        print('Quadrante Q4')
     elif x < 0 and y < 0:
        print('Quadrante Q3')
     else:
         print('Quadrante Q2')   
          
     print("Digite as coordenadas:")
     x = int(input())
     y = int(input()) 

    
