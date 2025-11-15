//Ayala Sasha, Gil Micaela com3
//Link del video: https://youtu.be/J0wS5m8f6qM
//En que pantalla estas 
let DEBUG = false;

//Variable global para cargar el sonido
let miSonido;

//Array  para almacenar las imágenes
let imgFondo= [];

//variable global para saber en que pantalla estoy
let pantalla;

//función para cargar la imágen y el sonido
function preload() {
  for (let i=0; i<17; i++ ) {
    imgFondo[i]= loadImage("./data/Imagen_"+nf(i, 2)+".jpg"); // toman las imagenes con 2 digitos 
  }
    miSonido=loadSound ("./data/Musica.mp3"); // cargar el sonido 
}

function setup() {
  createCanvas(640, 480);
  //valor inicial a la pantalla
  pantalla = 0;
}

function mostrarPantallaInicio() { // Funcion para que muestre las pantalla de inicio
  push();
  image( imgFondo[0], 0, 0, width, height);
  pop();
}

function draw() { // Funcion draw con If y Else If para mostrar todas las pantallas 
  background(220);

  if (pantalla === 0) {
    // Pantalla de inicio
    image(imgFondo[0],0,0,width,height);
    
   mostrarPantallaInicio();
     push();
    fill(255);
    textSize(32);
     textAlign(CENTER, CENTER);
     textStyle(BOLD);
     text("Pulsa para comenzar", width/2, height/2+140);
      pop();
      
  } else if (pantalla == 1) {
    //primer pantalla:
    image(imgFondo[1],0,0,width,height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto = "El soldado Teseo llega a la Isla de Creta para terminar con la vida del Minotauro. \n¿Teseo ingresa al laberinto para pelear contra el Minotauro?";
    text(texto, 0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40); // Se crea una funcion que dentro del draw dibuje un rectangulo en esas coordenadas
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 2) {
    //segunda pantalla:
    image (imgFondo[2],0,0,width,height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
   let texto= "¿ Quieres que Teseo luche contra los amigos del Minotauro (Centauros y Cíclopes)?";
   text( texto, 0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 3) {
    //tercer pantalla:
    image(imgFondo[3],0,0,width,height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto= "¿Teseo les gana a los seres mitológicos?";
    text(texto,0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 4) {
    //cuarta pantalla:
    image(imgFondo[4], 0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto= "Teseo lucha y gana ¿Teseo está listo para liberar a la ciudad del Minotauro?";
    text( texto, 0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 5) {
    //quinta pantalla:
    image(imgFondo [5], 0,0, width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto= "Teseo por fin encuentra al Minotauro y usa su espada para luchar contra él , vencerlo y así poder regresar a Atenas ¿Teseo le gana al Minotauro?";
    text( texto, 0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 6) {
    //pantalla seis:
     image( imgFondo [6], 0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="Teseo gana la batalla, terminando con la vida del Minotauro y con ayuda del Ovillo de hilo que le obsequió Ariadna la hija de Minos (rey de Creta) logra volver al inicio del laberinto y escapar. FELICITACIONES has ayudado a Teseo a vencer al Minotauro y liberar a la ciudad de este monstruo!";
    text( texto, 0, height*0.7, width, height*0.7);
    mostrarBoton("Volver A Empezar" ,538, 427, 80, 40);
    mostrarBoton("Creditos" ,300, 427, 80, 40);
    pop();
    
  } else if (pantalla == 7) {
    //pantalla siete:
    image( imgFondo [7], 0,0, width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="Teseo no se siente  lo suficientemente fuerte para lucha contra el Minotauro, se arrepiente de luchar y se retira a su pueblo.";
    text(texto, 0, height*0.7, width, height*0.7);
    textSize(5);
    mostrarBoton("Volver a empezar", 100, 400, 80, 40);
    mostrarBoton("Créditos ", 540, 400, 80, 40);
    pop();
    
  } else if (pantalla == 8) {
    //pantalla ocho:
    image (imgFondo [8], 0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="Teseo se rinde ante los Cíclopes y Centauros. Les pide que lo dejen regresar a su pueblo. \n¿Lo dejan volver a su pueblo?";
    text(texto,0, height*0.6, width, height*0.6);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 9) {
    //pantalla nueve:
    image( imgFondo [9], 0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(0);
    textSize(16);
    textStyle(BOLD);
   let texto= "Teseo le pide ayuda a los Dioses del Olimpo. Ellos escuchan su llamado. \n¿Los Dioses deciden ayudarlo?";
   text(texto,0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 10) {
    //pantalla diez:
    image( imgFondo[10],0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto= "Los Dioses lo ayudan, brindándole armas de defensa y ataque\n¿Teseo les gana a los Cíclopes y Centauros?";
    text(texto,0, height*0.7, width, height*0.7);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 11) {
    //pantalla once:
    image(imgFondo[11], 0,0, width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="A pesar de que Teseo es un gran luchador, su espada no le fue de gran ayuda. Al darse cuenta, intentó escapar con el ovillo que le regaló Ariadna , pero lo perdió en el camino. El Minotauro lo venció";
   text(texto, 0, height*0.7, width, height*0.7);
    mostrarBoton("Volver a empezar", 100, 430, 80, 40);
    mostrarBoton("Créditos ", 540, 430, 80, 40);
    pop();
    
  } else if (pantalla == 12) {
    //pantalla doce:
    image (imgFondo[12],0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="Los Dioses no lo ayudan, pero él llama a su amiga Medusa, quien decide ayudarlo, convirtiéndo en piedra a sus enemigos\n¿Teseo quiere continuar a su encuentro con el Minotauro?";
   text(texto, 0, height*0.65, width, height*0.65);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 13) {
    //pantalla trece:
    image(imgFondo[13], 0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    let texto="Aún con la ayuda de los Dioses, Teseo no logra vencer a sus enemigos, pero recuerda las palabras del Oráculo Teseo es el único soldado capaz de vencer al hijo del rey Minos, y esas palabras le dieron fuerza para vencerlos. \n¿Teseo quiere seguir en busca del Minotauro?";
    text(texto,0, height*0.60, width, height*0.60);
    pop();
    //mostrar los botones "si" y "no"
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 14) {
    //pantalla catorce:
    image(imgFondo[14],0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
    textStyle(BOLD);
   let texto="Teseo decide hacer trampa y treparse por el laberinto para ver hacia donde se encuentra el Minotauro\n¿Teseo encuentra la salida?";
    text( texto,0, height*0.65, width, height*0.65);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
    
  } else if (pantalla == 15) {
    //pantalla quince:
    image( imgFondo[15],0,0,width, height);
    push();
    fill(100, 40);
    rect(0, height*0.55, width, height*0.4);
    fill(255);
    textSize(15);
     textStyle(BOLD);
   let texto="Teseo decide seguir por el camino que pensó al principio y recuerda que su padre Egeo, le regaló una pócima para volveerse más fuerte. Teseo toma la pócima para luchar contra el Minotauro \n¿Teseo continúa en la búsuqeda del Minotauro, luego de tomar la pócima?";
  text(texto, 0, height*0.60, width, height*0.60);
    pop();
    mostrarBoton("Si", 100, 400, 80, 40);
    mostrarBoton("No", 540, 400, 80, 40);
  
  } else if (pantalla == 16) {
  // pantalla dieciséis:
  image(imgFondo[16], 0, 0, width, height);
  push();
  fill(100, 40);
  fill(255);
  pop();
  mostrarBoton("Volver A Empezar" ,538, 427, 80, 40);
 }


  if (DEBUG) {
    push();
    fill(0, 255, 0);
    textAlign(LEFT);
    textSize(20);
    text( "PANTALLA:" + pantalla, 20, 20);
    pop();
  }
  fill(218,250,18);
  ellipse(40,40,60,60);
  fill(0);
  let texto="Sonido";
  text(texto,22,40,60,60); // dibujar el boton
}

function mousePressed() {
  if (pantalla === 0) {
    //flujo de estado de pantalla 0 a pantalla 1
    pantalla = 1;
    
    } else if (pantalla == 1) {
    if (colisionRectangular(100, 400, 80, 40)) { //En el MousePressed le das esa coordenada usando Else if y if para ver si cumple la condicion de la colision para cambiar de pantalla 
      pantalla = 2; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }

  } else if (pantalla == 7) {
    // pantalla de créditos y volver a empezar
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 0; // Volver a empezar
    }
    
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 16; // Creditos 
    }


  } else if (pantalla == 2) {
    //acciones pantalla 2
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 3; // si
    }

    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 8; // no
    }
  } else if (pantalla == 3) {
    //acciones pantalla 3
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 4; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 9; // no
    }
  } else if (pantalla == 4) {
    //acciones pantalla 4
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }
  } else if (pantalla == 5) {
    //acciones pantalla 5
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 6; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 11; // no
    }
    
    } else if (pantalla == 6) {
    if (colisionRectangular(538, 427, 80, 40)) {
      pantalla = 0; // Volver a Empezar 
    }
     if (colisionRectangular(300, 427, 80, 40)) {
      pantalla = 16; // Creditos
    }
   
  } else if (pantalla == 8) {
    //acciones pantalla 8
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 7; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 9; // no
    }
  } else if (pantalla == 9) {
    //acciones pantalla 9
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 10; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 12; // no
    }
  } else if (pantalla == 10) {
    //acciones pantalla 10
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 13; // no
    }
   } else if (pantalla == 11) {
    //acciones pantalla 10
    if (colisionRectangular(100, 430, 80, 40)) {
      pantalla = 0; // si
    }
    if (colisionRectangular(540, 430, 80, 40)) {
      pantalla = 16; // no
    }
    
    
  } else if (pantalla == 12) {
    //acciones pantalla 12
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 14; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }
    
  } else if (pantalla == 14) {
    //acciones pantalla 14
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 15; // no
    }
  } else if (pantalla == 13) {
    //acciones pantalla 13
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 14; // no
    }
  } else if (pantalla == 15) {
    //acciones pantalla 15
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
  }
  if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }
  
  } else if (pantalla == 16) {
    //acciones pantalla 16
    if (colisionRectangular(538, 427, 80, 40)) {
      pantalla = 0; // Volver a empezar
  }
   
    }
   if (dist(mouseX, mouseY, 40, 40) < 30) { // Si la distancia de Mouse X y Mouse Y es menor al radio de 30 va a funcionar
    if (miSonido.isPlaying()) {
      miSonido.pause(); // Pausar volumen
    } else {
      miSonido.play();
      miSonido.setVolume(0.1); // baja el volumen 
    }
   }
}

// Botón con rectMode(CENTER)
function mostrarBoton(texto_, x_, y_, ancho_, alto_) { // Una funcion para que se muestre el boton en las pantallas 
  push();
  rectMode(CENTER);
  fill(18,244,250);
  rect(x_, y_, ancho_, alto_);
  fill(0);
   textSize(9);
  text( texto_, 0,0);
  textAlign(CENTER, CENTER);
  text(texto_, x_, y_);
  pop();
}

// Funcion para q detecte si el mouse está dentro de un rectángulo
function colisionRectangular(x_, y_, ancho_, alto_) {
    // Comprueba si la posición del mouse (mouseX, mouseY)
  // está dentro de los límites del rectángulo centrado en (x_, y_)
  if (
  //si moseX está a la derecha de - ancho dividido 2 y si mouseX es menor a la posición en X + el ancho dividido 2 y
  //mouseY es mayor a la coordenada en Y menos el alto dividido 2 y mouseY es menor a la posición en y que le pasé + el alto dividido 2,
    mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 &&
    mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2
    ) {
      //entonces devuelvo verdadero
    return true;
  } else {
    //entonces devuelvo falso
    return false;
  }
}
