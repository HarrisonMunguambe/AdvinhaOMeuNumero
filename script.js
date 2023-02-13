'use strict';
//ele vai pegar o elemento message e nele levar o seu texto

// console.log(document.querySelector('.message').textContent);

// //mudar o texto de um elemento em htm com js
// document.querySelector('.message').textContent = 'correct ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // para levar um valor usamos VALOR
// document.querySelector('.guess').value = 23;

//variavel de score
let score = 20;
let highestScore = 0;

//Definir o nr secreto inteiro
let nrSecreto = Math.trunc(Math.random() * 21);

// event em que clicam em um botao
document.querySelector('.check').addEventListener('click', function () {
  // para converter uma string nr do teclado para numero
  const guess = Number(document.querySelector('.guess').value);

  //eventos de ganhar e perder
  if (!guess) {
    document.querySelector('.message').textContent =
      'Nenhum numero Introduzido 👀';
  } else if (guess === nrSecreto) {
    document.querySelector('.number').textContent = nrSecreto;

    document.querySelector('.message').textContent = 'Numero Correcto 🎉🏆👍 ';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //highestScore
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess > nrSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Numero errado, e maior que o certo 📈😢 ';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Infelizmente voce perdeu😢 ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < nrSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Numero errado, e menor que o certo 📈😢 ';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Infelizmente voce perdeu😢 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  nrSecreto = Math.trunc(Math.random() * 21);
  score = 20;

  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

//😁✔
