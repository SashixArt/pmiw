class Minotauro {
  constructor(x, y, plat) {
    this.x = x;
    this.y = y;
    this.tam = 40;
    this.vel = 32;
    this.moviendose = false;
    this.targetX = x;
    this.targetY = y;
    this.plat = plat; // referencia a la plataforma
  }

  mostrar() {
    image(minotauroImg, this.x, this.y, this.tam, this.tam);
  }

  move(dir) { // 0=derecha, 1=abajo, 2=izquierda, 3=arriba
    if (this.moviendose) return;

    let dx = 0;
    let dy = 0;
    if (dir === 0) dx = this.vel;
    if (dir === 1) dy = this.vel;
    if (dir === 2) dx = -this.vel;
    if (dir === 3) dy = -this.vel;

    let nuevoX = this.x + dx;
    let nuevoY = this.y + dy;

    if (this.puedeMover(nuevoX, nuevoY)) {
      this.targetX = nuevoX;
      this.targetY = nuevoY;
      this.moviendose = true;
    }
  }

  actualizar() {
    if (this.moviendose) {
      this.x = this.targetX;
      this.y = this.targetY;
      this.moviendose = false;
    }
  }

  puedeMover(nx, ny) {
    let tileX = floor(nx / 32);
    let tileY = floor(ny / 32);

    if (tileY < 0 || tileX < 0 || tileY >= this.plat.filas || tileX >= this.plat.columnas) return false;
    return this.plat.plataform[tileY][tileX] !== 1;
  }
}
