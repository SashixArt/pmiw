//Variable Global para el JUEGO
let juego;

// Variables Globales para las imagenes 

let rocaImg; 
let monedaImg;
let minotauroImg;
let jugadorImg;
let pantallaInicioImg;
let creditospantallaImg;
let sonidoOnImg;
let sonidoOffImg;

function preload() {
  
  //Cargar Imagenes
  rocaImg = loadImage('data/roca.png');
  monedaImg = loadImage('data/moneda.png');
  jugadorImg = loadImage('data/jugador.png');
  minotauroImg = loadImage('data/minotauro.png');
  pantallaInicioImg = loadImage('data/pantalladeinicio.png');
  creditospantallaImg = loadImage('data/creditospantalla.png'); 
  
  //Cargar Imagenes de Sonidos
  sonidoOnImg = loadImage("data/sonido_on.png");
  sonidoOffImg = loadImage("data/sonido_off.png");
  
  //Cargar sonido
  musica = loadSound("data/musica.mp3");
}



function setup() {
  createCanvas(640, 480);
  //Crear el Juego
  juego = new Juego();

}

function draw() {
  background(200);
  //Buscar en el juego Actualizar
  juego.actualizar();
  
}

function keyPressed() {
  juego.presionarTecla();
 
}

function mousePressed() {
  //Buscar en el juego Presionar mouse
  juego.presionarMouse();


}
