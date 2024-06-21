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
      checkWinCondition();//chama a função que verifica as condições de vitória.
    }
  });
}

//declara a função que define a condição de vitória
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal superior
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //horizontal meio
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //horizontal inferior
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //vertical esquerda
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //vertical meio
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //vertical direita
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            //x ganhou
            declareWinner("x")
        }else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
            //o ganhou
            declareWinner("o")
        }
    }
    //velha
    let counter = 0;
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
        if (counter == 9) {
            declareWinner(" ")
        }
    }
}

//função que limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = " ";
    if(winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 Venceu."
    }
    else if(winner == "o") {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 Venceu"
    }
    else {
        msg = "Deu velha!"
    }
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");
    setTimeout(function() {
        messageContainer.classList.add("hide")
    }, 3000);
    player1 = 0;
    player2 = 0;
    let boxesToRemove = document.querySelectorAll(".box div");
    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}