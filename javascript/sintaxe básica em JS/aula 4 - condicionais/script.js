var sao_paulo = 2;
var palmeiras = 2;
var placar;

//if ternario
sao_paulo != -1 && palmeiras != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores inválidos');

//usando if
if (sao_paulo > 0 && palmeiras == 0) {
    console.log('o Tricolor marcou gol');
    placar = sao_paulo > palmeiras;
}

//usando else if
else if  (palmeiras > 0 && sao_paulo == 0) {
    console.log('Palmeiras marcou gol!');
    placar = palmeiras > sao_paulo;
}
else {
    console.log('Jogo segue empatado');
}


switch (placar) {
    case placar = sao_paulo > palmeiras:
        console.log('São Paulo ganhou!');
        break;
    case placar = palmeiras >  sao_paulo:
        console.log("Palmeiras ganhou");
        break;
    default:
        console.log ('O jogo terminou empatado!')
}