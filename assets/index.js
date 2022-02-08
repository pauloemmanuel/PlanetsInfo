
document.getElementById("planeta").animate([
  // keyframes
  {transform: ' translateY(-1rem)'}, 
  {transform: ' translateY(1rem)'}, 
  {transform: ' translateY(-1rem)'},
], {
  // timing options
  duration: 5000,
  iterations: Infinity
});

function trocarPlaneta(planeta){
  dadosPlaneta = banco_de_dados_imaginario[planeta];
  document.getElementById('planeta').style.backgroundImage = 'url("./assets/images/planets/planet-'+planeta+'.svg")'
  document.getElementById('planet-name').innerText = dadosPlaneta.nome
  document.getElementById('planet-description').innerText = dadosPlaneta.descricao
}


let banco_de_dados_imaginario = {
  earth:{
    nome:'Terra',
    descricao:'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos,[14][15][16][17] e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta.[18] As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.',
    rotationTime:10,
    raio: 7188,
    translationTime:210,
    temp:10
  },
  venus:{
    nome:'Venus',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:15,
    raio: 2518,
    translationTime:10,
    temp:90
  },
  jupiter:{
    nome:'Jupiter',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:90,
    raio: 1768,
    translationTime:892,
    temp:0
  },
  mars:{
    nome:'Marte',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:4,
    raio: 1000,
    translationTime:110,
    temp:98
  },
  mercury:{
    nome:'Mercúrio',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:60,
    raio: 6188,
    translationTime:210,
    temp:28
  },
  neptune:{
    nome:'Netuno',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:10,
    raio: 1128,
    translationTime:910,
    temp:41
  },
  saturn:{
    nome:'Saturno',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:10,
    raio: 5178,
    translationTime:197,
    temp:-187
  },
  uranus:{
    nome:'Urano',
    descricao:'sadfasfsafasfsafsafsafsafsafasfsafasfasfsafsafsaf',
    rotationTime:1000,
    raio: 188,
    translationTime:210,
    temp:10
  }
}