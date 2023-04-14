const initialMatriz = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let button1 = "";
let button2 = "";
let numButtonsOpen = 0;
let aciertos = 0;
const container = document.querySelector(".container");
const winner = document.querySelector(".winner");

//Generando matriz aleatoria
const matriz = initialMatriz.sort(() => Math.random() - 0.5);

function openButton(id) {
  numButtonsOpen++;

  if (numButtonsOpen === 1) {
    button1 = document.getElementById(id);
    button1.innerText = matriz[id];
    button1.disabled = true;
  } else if (numButtonsOpen === 2) {
    button2 = document.getElementById(id);
    button2.innerText = matriz[id];
    button2.disabled = true;

    verifySimilar();
    verifyWinner();
  }
}

function verifySimilar() {
  if (button1.innerText === button2.innerText) {
    aciertos++;
    numButtonsOpen = 0;
  } else {
    setTimeout(() => {
      button1.innerText = "";
      button2.innerText = "";
      button1.disabled = false;
      button2.disabled = false;
      numButtonsOpen = 0;
    }, 1000);
  }
}

function verifyWinner() {
  if (aciertos === 8) {
    container.style.display = "none";
    winner.innerHTML =
      '<h1>¡Ganaste!, eres increible.</h1><img src="https://plantillasdememes.com/img/plantillas/ta-bien01592717127.jpg" alt="Ta bien">';
    winner.style.display = "flex";
  }
}
