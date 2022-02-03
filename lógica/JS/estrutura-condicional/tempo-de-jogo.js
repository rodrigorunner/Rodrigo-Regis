// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo
// pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24
// heoras.

let hinicial, hfinal, tempo;

hinicial = 2;
hfinal = 16;

if(hinicial < hfinal) {
    tempo = hfinal - hinicial
    console.log('O jogo durou ' + tempo + ' horas');
} else {
    tempo = 24 - (hinicial - hfinal)
    console.log('O jogo durou ' + tempo + ' horas');
}

