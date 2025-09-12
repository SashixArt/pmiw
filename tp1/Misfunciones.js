//Me olvide que habia que hacer las dos paginas asi que lo cambie al final

function dibujarBloqueyCirculo(x, y, tam, estado) { //Funcion para ejecutar los cuadrados y circulos (Me equivoque en el video, antes se usaba void aca tambien)
  rect(x, y, tam, tam); // Fondo del cuadrado

  // Color del círculo según estado y modos activados (solo =)
  if (colorxd) {
    if (estado === 0) {
      fill(255, 94, 0);    // naranja
    } else {
      fill(255, 183, 3);   // amarillo
    }
  } else if (coloruwu) {
    if (estado === 0) {
      fill(255, 147, 233); // rosa
    } else {
      fill(122, 66, 255);  // violeta
    }
  } else {
    if (estado === 0) {
      fill(6, 13, 29);     // azul oscuro
    } else {
      fill(36, 41, 184);   // azul claro
    }
  }

  // Efecto al pasar el mouse
  if (dist(x + 67, y + tam / 2, mouseX, mouseY) < tam / 2) {
    fill(random(255), random(255), random(255));
  }

  ellipseMode(CORNER);
  ellipse(x, y, tam, tam);
}

function calculaelEstado(i, j) { // La creo como una funcion en vez de una variable Int
  return (i + j) % 2; // Alternancia ajedrezada
}
function reiniciarTodo() {
  colorxd = false;
  coloruwu = false;
  cant = cantInicial;
}

function aumentarCantidad() { // (funciones para aumentar) Si la cantidad es menor a 10 la cantidad va a +
  if (cant < 10) {
    cant++;
  }
}

function disminuirCantidad() { // (funciones para disminuir) Si cantidad es mayor a 1 cantidad va -
  if (cant > 1) {
    cant--;
  }
}
