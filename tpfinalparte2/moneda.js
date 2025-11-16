class Moneda {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 25;
  }

  mostrar() {
    image(monedaImg, this.x, this.y, this.tam, this.tam);
  }
}
