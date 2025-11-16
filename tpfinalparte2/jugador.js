class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 25;
    this.vel = 32;
  }

  mostrar() {
    image(jugadorImg, this.x, this.y, this.tam, this.tam);
  }
 
  move(dir) { // le asigno direcciones 0=derecha,1=abajo,2=izquierda,3=arriba
    let dx = 0;
    let dy = 0;

    if (dir === 0) dx = this.vel;   
    if (dir === 1) dy = this.vel;   
    if (dir === 2) dx = -this.vel;  
    if (dir === 3) dy = -this.vel;  

    if (this.puedeMover(dx, dy)) { // verifico si puede moverse
      this.x += dx;
      this.y += dy;
    }
  }

  puedeMover(dx, dy) { // verifico colisiones con la plataforma
    let nuevaX = this.x + dx; // nueva posición en x
    let nuevaY = this.y + dy; // nueva posición en y

    let tileX = floor(nuevaX / 32); // calculo la columna
    let tileY = floor(nuevaY / 32); // calculo la fila

    if (tileY < 0 || tileX < 0 || tileY >= plat.filas || tileX >= plat.columnas) return false; // fuera de límites

    return plat.plataform[tileY][tileX] !== 1; // retorno si no es un muro
  }
}
