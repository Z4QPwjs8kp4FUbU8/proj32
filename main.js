const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
 for (let j = 0; j < botoes.length; j++) {
 botoes[j].classList.remove("ativo");
 textos[j].classList.remove("ativo");
 }
 botoes[i].classList.add("ativo");
 textos[i].classList.add("ativo");
}
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0){
 return [dias,horas,minutos,segundos];
  } else {
 return [0,0,0,0];
}}
function atualizaCronometro(){
document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];

}
function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro,1000);
}
comecaCronometro();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  const perguntas = [
  {
      enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
          "Isso é assustador!",
          "Isso é maravilhoso!"
      ]
  },
  {
      enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
          "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
          "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
      ]
  },


  {
      enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
      alternativas: [
          "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
          "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
      ]
  },


  {
      enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternativas: [
          "Criar uma imagem utilizando uma plataforma de design como o Paint.",
          "Criar uma imagem utilizando um gerador de imagem de IA."
      ]
  },


  {
      enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
      alternativas: [
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
          "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
      ]
  },
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
}
