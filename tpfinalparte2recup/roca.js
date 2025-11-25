class Roca {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 32;
  }

  mostrar() {
    image(rocaImg, this.x, this.y, this.tam, this.tam);
  }
}
