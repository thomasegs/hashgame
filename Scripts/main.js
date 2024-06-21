// Autor: Thomas Erik Gaspar
// Project: Jogo da velha
// Projeto para aprendizagem em Javascript do curso "JavaScript do básico ao avançado (c/ Node.js e projetos)"
// Curso inserido na trilha de aprendizado SP - FullStack Journey (Node.js&amp;React) - AWS Cloud Context - Compass UOL | [03/06/2024]
// Comentado o passo-a-passo da lógica de programação.

let x = document.querySelector(".x"); //x passa a ser a div  com class="x"
let o = document.querySelector(".o"); //o passa a ser a div class="o"
let boxes = document.querySelectorAll(".box"); //boxes passa a ser todos os elementos da class="box"
let buttons = document.querySelectorAll("#buttons-container button"); //buttons passa a ser os botões contidos na class="buttons-container"
let messageContainer = document.querySelector("#message"); //messageContainer passa a ser a div com o id="message"
let messageText = document.querySelector("#message p"); //messageText passa a ser os paragrafos contidos na div com id="message"
let secondPlayer; // define uma variável para o segundo jogador

// Contador de jogadas
let player1 = 0; //quantas vezes o jogador um jogou
let player2 = 0; //quantas vezes o jogador dois jogou

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {//inicia um contador de 0 até o tamanho da array que a var boxes gera
  boxes[i].addEventListener("click", function () {//adiciona o evento de click e a função a cada um dos elementos contidos no array boxes
    if (this.childNodes.length == 0) {//verifica o tamanho do nó na box da vez no loop, se ele for igual a zero significa que nenhum elemento foi inserido na box.
      let el = 0; //cria um elemento para armazenar o "x" ou o "o"
      if (player1 == player2) {//se o número de jogadas do player 1 for igual a do player dois, é a vez do player um.
        el = x; //o elemento criado anteriormente recebe o elemento contido na var "x"
        player1 += 1; //acrescenta um ao número de jogadas do player 1
      } else {//se o número de jogadas do player 1 e do player dois forem diferentes, significa que é a vez do player dois.
        el = o; //o elemento criado anteriormente recebe o elemento contiddo na var "o"
        player2 += 1; //adiciona um ao número de jogadas do player 2 igualando ao player 1 e retornando a jogada para ele.
      }
      let cloneEl = el.cloneNode(true); //define uma variável que irá receber o clone do elemente el
      this.appendChild(cloneEl); //acrescenta a box da vez o elemento contido em cloneEl
    }
  });
}
