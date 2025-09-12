//Ayala Sasha Micaela Comision 3
//URL youtube video: https://www.youtube.com/watch?v=R0AyAHFTBBM  //agregue una parte de como se veia 
//Cambio la sintaxis de las variables de Int, o Boolean a Let
let obrauwu; //variable let para poner la imagen
let cant = 3; // Calcula el tamaño de cada cuadrado según la cantidad
let cantInicial = 3; // Cantidad inicial
let tam; //Tamaño
let colorxd = false; //  paleta 1 (amarillo/naranja)
let coloruwu = false; // paleta 2 (violeta/rosa)

function preload() { //funcion preload para cargar antes del setup para que cargue bien
  // Cargar la imagen antes del setup
  obrauwu= loadImage("data/obrauwu.png"); //agregue data para que vaya a buscarlo en esa carpeta
}

function setup() { //Pongo Function en vez de void
  createCanvas(800, 400); //Pongo CreateCanvas en vez de Size
  noStroke(); //No contorno
  imageMode(CORNER);
}

function draw() {
  background(255);
  image(obrauwu, 0, 0, 400, 400);
  tam = 400 / cant; // Calcula la cantidad y tamaño inicial
  // dibujar la grilla
  for (let i = 0; i < cant; i++) { // Cambio y pongo un Let para el I, un ciclo For para las columnas
    for (let y = 0; y < cant; y++) { // Cambio y pongo un Let para el Y, un ciclo for para los circulos
      let estado = calculaelEstado(i, y); //Tambien creo una variable llamada estado para alternar entre 1 y 0


      if (coloruwu) {
        if (estado === 0) {
          fill(122, 66, 255); // violeta claro
        } else {
          fill(255, 147, 233); // rosa pastel
        }
      } else if (colorxd) {
        if (estado === 0) {
          fill(255, 183, 3); // amarillo fuerte
        } else {
          fill(255, 94, 0);  // naranja fuerte
        }
      } else {
        if (estado === 0) {
          fill(36, 41, 184); // azul
        } else {
          fill(6, 13, 29);   // azul oscuro
        }
      }

      dibujarBloqueyCirculo(400 + i * tam, y * tam, tam, estado); // dibuja la celda
    }
  }
}

function keyPressed() { //Se usa una = de mas y tambien agregue que en mayusculas se reinicie tambien
  if (key === 'a' || key === 'A') {
    colorxd = true;
    coloruwu = false;
  } else if (key === 's' || key === 'S') {
    coloruwu = true;
    colorxd = false;
  } else if (key === 'r' || key === 'R') {
    reiniciarTodo();
  } else if (key === '+') {
    aumentarCantidad();
  } else if (key === '-') {
    disminuirCantidad();
  }
}
