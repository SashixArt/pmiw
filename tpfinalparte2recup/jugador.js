class Personaje {
  constructor(x, y, tam, plat, img) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.plat = plat;
    this.img = img;

    this.vel = 4;
    this.moviendose = false;
    this.targetX = x;
    this.targetY = y;
  }

  mostrar() {
    image(this.img, this.x, this.y, this.tam, this.tam);
  }

  move(dir) {
    if (this.moviendose) return;

    let dx = 0, dy = 0;
    if (dir === 0) dx = 32;
    if (dir === 1) dy = 32;
    if (dir === 2) dx = -32;
    if (dir === 3) dy = -32;

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
      if (abs(this.x - this.targetX) <= this.vel) this.x = this.targetX;
      else this.x += this.vel * Math.sign(this.targetX - this.x);

      if (abs(this.y - this.targetY) <= this.vel) this.y = this.targetY;
      else this.y += this.vel * Math.sign(this.targetY - this.y);

      if (this.x === this.targetX && this.y === this.targetY) this.moviendose = false;
    }
  }

  puedeMover(nx, ny) {
    let tileX = floor(nx / 32);
    let tileY = floor(ny / 32);

    if (tileX < 0 || tileY < 0 || tileX >= this.plat.columnas || tileY >= this.plat.filas) return false;
    return this.plat.plataform[tileY][tileX] !== 1;
  }
}
