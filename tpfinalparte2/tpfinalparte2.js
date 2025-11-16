//Ayala Sasha Micaela Comision 3
//Juego Teseo y el Minotauro: Pacman
//https://www.youtube.com/watch?v=7meB1kRsIkM


let juego; // variable global del juego

let rocaImg; // Variables globales para las imagenes 
let monedaImg;
let minotauroImg;
let jugadorImg;
let pantallaInicioImg;
let creditospantallaImg;
let sonidoOnImg;
let sonidoOffImg;

let musica;
let sonidoActivado = true;

let audioHabilitado = false; // solo habilita audio 1 vez

let vidasInicial = 2; // Vidas iniciales del jugador

let rocas = []; // Array de rocas
let monedas = []; // Array de monedas

let plat; // Variable global de los objetos de la clase Plataforma
let jugador;
let minotauro;

// Botones
let botonInicio, botonCreditos, botonTutorial; // botones de la pantalla de inicio
let botonSonido;

function preload() {
  rocaImg = loadImage('data/roca.png');
  monedaImg = loadImage('data/moneda.png');
  jugadorImg = loadImage('data/jugador.png');
  minotauroImg = loadImage('data/minotauro.png');
  pantallaInicioImg = loadImage('data/pantalladeinicio.png');
  creditospantallaImg = loadImage('data/creditospantalla.png'); // cargar imagenes sonidos 

  sonidoOnImg = loadImage("data/sonido_on.png");
  sonidoOffImg = loadImage("data/sonido_off.png");

  musica = loadSound("data/musica.mp3");
}

function setup() {
  createCanvas(640, 480);
  plat = new Plataforma();
  juego = new Juego();

  botonInicio = {x: 220, y: 250, w: 200, h: 40, texto: "Tocar ESPACIO para empezar"};  // hacer los botones 
  botonCreditos = {x: 220, y: 310, w: 200, h: 40, texto: "Créditos"};
  botonTutorial = {x: 220, y: 370, w: 200, h: 40, texto: "Tutorial"};

  botonSonido = {x: 20, y: 420, w: 50, h: 50};
}

function draw() {
  background(200);
  juego.actualizar();

  if (juego.estado === 'jugando') {
    push();
    textSize(16);
    fill(255);
    textAlign(LEFT, TOP);
    text("Puntos: " + juego.puntos, 10, 10);
    textAlign(RIGHT, TOP);
    text("Vidas: " + juego.vidas, width - 10, 10); // mostrar puntos y vidas
    pop();
  }
}

function keyPressed() {
  juego.presionarTecla();

  if (!jugador) return;

  if (keyCode === RIGHT_ARROW) jugador.move(0);
  if (keyCode === DOWN_ARROW) jugador.move(1);  // funcion move para el jugador
  if (keyCode === LEFT_ARROW) jugador.move(2);
  if (keyCode === UP_ARROW) jugador.move(3);

  if (key === 'd' || key === 'D') minotauro.move(0);
  if (key === 's' || key === 'S') minotauro.move(1);
  if (key === 'a' || key === 'A') minotauro.move(2); // funcion move para el minotauro
  if (key === 'w' || key === 'W') minotauro.move(3);
}

function mousePressed() {

  
  if (juego.estado === 'inicio') {   // Botón sonido
    
    if (!audioHabilitado) {  // para que el audio se habilite solo una vez (hay que tocar el boton dos veces)
      userStartAudio();
      audioHabilitado = true; 
    }

    if (mouseX > botonSonido.x && mouseX < botonSonido.x + botonSonido.w &&
        mouseY > botonSonido.y && mouseY < botonSonido.y + botonSonido.h) { // cambiar estado sonido

      sonidoActivado = !sonidoActivado;

      if (sonidoActivado) {
        musica.loop();
        musica.setVolume(0.5); 
      } else {
        musica.stop();
      }
    }
  }

  // Botón créditos
  if (juego.estado === 'inicio') {
    if (mouseX > botonCreditos.x && mouseX < botonCreditos.x + botonCreditos.w &&
        mouseY > botonCreditos.y && mouseY < botonCreditos.y + botonCreditos.h) { // cambiar a pantalla créditos
      juego.estado = 'creditos';
    }

    if (mouseX > botonTutorial.x && mouseX < botonTutorial.x + botonTutorial.w &&
        mouseY > botonTutorial.y && mouseY < botonTutorial.y + botonTutorial.h) { // cambiar a pantalla tutorial
      juego.estado = 'tutorial';
    }
  }
}

class Juego {
  constructor() {
    this.estado = 'inicio'; // estados: inicio, jugando, gameover, victoria, creditos, tutorial
    this.puntos = 0;
    this.vidas = vidasInicial;
  }

  evaluarColisionesMonedas() { // evaluar colisiones entre jugador y monedas
    if (!jugador) return;

    for (let i = monedas.length - 1; i >= 0; i--) { // recorrer monedas al revés para eliminar sin problemas
      let m = monedas[i]; // moneda actual
      let distancia = dist(jugador.x + 16, jugador.y + 16, m.x + 16, m.y + 16); // calcular distancia

      if (distancia < 16 + 5) {  // colisión con moneda
        monedas.splice(i, 1); // eliminar moneda
        this.puntos += 1;
      }

      if (monedas.length === 0) {
        this.estado = 'victoria';
        return;
      }
    }
  }

  evaluarColisionMinotauro() { // evaluar colisiones entre jugador y minotauro
    if (!jugador || !minotauro) return; // si no existen, salir

    let distancia = dist(jugador.x + 16, jugador.y + 16, minotauro.x + 16, minotauro.y + 16); // calcular distancia

    if (distancia < 32) { // colisión con minotauro
      this.vidas -= 1; // perder vida

      if (this.vidas <= 0) { // si no quedan vidas, game over
        this.estado = 'gameover'; // cambiar estado a game over
      } else {
        // reiniciar posiciones
        for (let i = 0; i < plat.filas; i++) {
          for (let j = 0; j < plat.columnas; j++) { // buscar posiciones iniciales

            if (plat.plataform[i][j] == 4) { // jugador asignarle posición inicial en la plataforma
              jugador.x = j * 32;
              jugador.y = i * 32;
            }

            if (plat.plataform[i][j] == 5) { // minotauro asignarle posición inicial en la plataforma
              minotauro.x = j * 32;
              minotauro.y = i * 32;
            }
          }
        }
      }
    }
  }

  reiniciarJuego() { // reiniciar variables del juego
    this.estado = 'inicio'; // volver a estado inicio
    this.vidas = vidasInicial; // reiniciar vidas
    this.puntos = 0; // reiniciar puntos

    rocas = []; // reiniciar arrays y objetos
    monedas = []; 
    jugador = null;
    minotauro = null;
  }

  actualizar() { // actualizar estado del juego
    if (this.estado === 'inicio') { // pregunta si el estado es inicio para mostrar pantalla inicio, gameover etc.
      this.pantallaInicio();
      return;
    }

    if (this.estado === 'gameover') {
      this.pantallaGameOver();
      return;
    }

    if (this.estado === 'jugando') {
      this.jugar();
    }

    if (this.estado === 'victoria') {
      this.pantallaVictoria();
    }

    if (this.estado === 'creditos') {
      this.pantallaCreditos();
    }

    if (this.estado === 'tutorial') {
      this.pantallaTutorial();
    }
  }

  presionarTecla() {
    if (this.estado === 'inicio' && key === ' ') { // iniciar juego al presionar espacio
 
      this.estado = 'jugando'; // cambiar estado a jugando

      rocas = []; // reiniciar arrays y objetos
      monedas = [];
      jugador = null;
      minotauro = null;


      // GENERAR MAPA
      for (let i = 0; i < plat.filas; i++) {
        for (let j = 0; j < plat.columnas; j++) {

          if (plat.plataform[i][j] == 1)
            rocas.push(new Roca(j * 32, i * 32));

          if (plat.plataform[i][j] == 2)
            monedas.push(new Moneda(j * 32, i * 32));

          if (plat.plataform[i][j] == 4)
            jugador = new Jugador(j * 32, i * 32);

          if (plat.plataform[i][j] == 5)
            minotauro = new Minotauro(j * 32, i * 32);
        }
      }

      this.vidas = vidasInicial; // reiniciar vidas
      this.puntos = 0; // reiniciar puntos
    }

    else if (
      (this.estado === 'gameover' || // reiniciar juego al presionar espacio
       this.estado === 'victoria' || 
       this.estado === 'creditos' ||
       this.estado === 'tutorial') &&
      key === ' '
    ) {
      this.reiniciarJuego(); // reiniciar juego
    }
  }

  pantallaInicio() {
    image(pantallaInicioImg, 0, 0, width, height); // mostrar imagen de fondo

    // botón sonido
    image( 
      sonidoActivado ? sonidoOnImg : sonidoOffImg,
      botonSonido.x,
      botonSonido.y,
      botonSonido.w,
      botonSonido.h
    );

    push(); // hacer botones
    fill(255);
    stroke(0);
    rect(botonInicio.x, botonInicio.y, botonInicio.w, botonInicio.h, 10);
    rect(botonCreditos.x, botonCreditos.y, botonCreditos.w, botonCreditos.h, 10);
    rect(botonTutorial.x, botonTutorial.y, botonTutorial.w, botonTutorial.h, 10);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(botonInicio.texto, botonInicio.x + botonInicio.w / 2, botonInicio.y + botonInicio.h / 2);
    text(botonCreditos.texto, botonCreditos.x + botonCreditos.w / 2, botonCreditos.y + botonCreditos.h / 2);
    text(botonTutorial.texto, botonTutorial.x + botonTutorial.w / 2, botonTutorial.y + botonTutorial.h / 2);
    pop();
  }

  pantallaGameOver() { // mostrar pantalla game over
    push();
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(200, 0, 0);
    text("GAME OVER gana el MINOTAURO", width / 2, height / 2 - 20);
    textSize(15);
    fill(0);
    text("Presiona ESPACIO para volver al inicio", width / 2, height / 2 + 20);
    pop();
  }

  pantallaVictoria() { // mostrar pantalla victoria
    push();
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(200, 0, 0);
    text("VICTORIA DE TESEO", width / 2, height / 2 - 20);
    textSize(15);
    fill(0);
    text("Presiona ESPACIO para volver al inicio", width / 2, height / 2 + 20);
    pop();
  }

  pantallaCreditos() { // mostrar pantalla créditos
    image(creditospantallaImg, 0, 0, width, height);
  }

  pantallaTutorial() { // mostrar pantalla tutorial
    background(100);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text(
      "Tutorial\nTeseo: Usa flechas para moverte y gana tomando las monedas \nWASD para el minotauro: trata de que no tome las monedas \nPresiona ESPACIO para volver",
      width / 2,
      height / 2
    );
  }

  jugar() { // lógica del juego en estado jugando
    for (let i = 0; i < rocas.length; i++) rocas[i].mostrar();
    for (let i = 0; i < monedas.length; i++) monedas[i].mostrar();
    if (jugador) jugador.mostrar();
    if (minotauro) minotauro.mostrar();

    this.evaluarColisionesMonedas();
    this.evaluarColisionMinotauro();
  }
}
