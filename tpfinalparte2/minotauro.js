class Minotauro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 40;
    this.vel = 32;
  }

  mostrar() {
    image(minotauroImg, this.x, this.y, this.tam, this.tam);
  }

  move(dir) {
    let dx = 0;
    let dy = 0;

    if (dir === 0) dx = this.vel;   // derecha
    if (dir === 1) dy = this.vel;   // abajo
    if (dir === 2) dx = -this.vel;  // izquierda
    if (dir === 3) dy = -this.vel;  // arriba

    if (this.puedeMover(dx, dy)) {
      this.x += dx;
      this.y += dy;
    }
  }

  puedeMover(dx, dy) {
    let nuevaX = this.x + dx;
    let nuevaY = this.y + dy;

    let tileX = floor(nuevaX / 32);
    let tileY = floor(nuevaY / 32);

    if (tileY < 0 || tileX < 0 || tileY >= plat.filas || tileX >= plat.columnas) return false;

    return plat.plataform[tileY][tileX] !== 1;
  }
}
