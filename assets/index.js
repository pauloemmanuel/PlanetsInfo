
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

  if(document.querySelector('#planet-day').value === 1){
    document.querySelector('#planet-day').innerText = dadosPlaneta.rotationTime + ' DIA'
  }else{
    document.querySelector('#planet-day').innerText = dadosPlaneta.rotationTime + ' DIAS'
  }
  if(document.querySelector('#planet-year').value === 1){
    document.querySelector('#planet-year').innerText = dadosPlaneta.translationTime + ' DIA'
  }else{
    document.querySelector('#planet-year').innerText = dadosPlaneta.translationTime + ' DIAS'
  }
    document.querySelector('#planet-temp').innerText = dadosPlaneta.temp + '°C'
    


}


let banco_de_dados_imaginario = {
  earth:{
    nome:'Terra',
    descricao:'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta.[18] As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.',
    rotationTime:10,
    raio: 7188,
    translationTime:210,
    temp:10
  },
  venus:{
    nome:'Venus',
    descricao:'Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas.Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela d"Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor.',
    rotationTime:15,
    raio: 2518,
    translationTime:10,
    temp:90
  },
  jupiter:{
    nome:'Jupiter',
    descricao:'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.',
    rotationTime:90,
    raio: 1768,
    translationTime:892,
    temp:0
  },
  mars:{
    nome:'Marte',
    descricao:'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.[1]Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano. Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto. Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano.',
    rotationTime:4,
    raio: 1000,
    translationTime:110,
    temp:98
  },
  mercury:{
    nome:'Mercúrio',
    descricao:'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein. ',
    rotationTime:60,
    raio: 6188,
    translationTime:210,
    temp:28
  },
  neptune:{
    nome:'Netuno',
    descricao:'Netuno (pt-BR) ou Neptuno (pt) (AO 1990: Netuno ou Neptuno) é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas.',
    rotationTime:10,
    raio: 1128,
    translationTime:910,
    temp:41
  },
  saturn:{
    nome:'Saturno',
    descricao:'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.',
    rotationTime:10,
    raio: 5178,
    translationTime:197,
    temp:-187
  },
  uranus:{
    nome:'Urano',
    descricao:'Urano (Úrano em Portugal) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita.[13] William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.',
    rotationTime:1000,
    raio: 188,
    translationTime:210,
    temp:10
  }
}


function Active(index){
  let botoes = document.querySelectorAll('button');
  let botaoUsado = botoes[index-1];
  botoes.forEach((item)=>{
   if( item.classList.contains('active')){
     item.classList.toggle('active');
   }
  })
  
  botaoUsado.classList += ' active'
  }
