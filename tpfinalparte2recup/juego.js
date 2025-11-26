class Juego {
  constructor() {
    
    this.estado = "inicio";
    this.vidasInicial = 2;
    this.vidas = this.vidasInicial;
    this.puntos = 0;
    this.rocas = [];
    this.monedas = [];
    this.jugador = null;
    this.minotauro = null;
    this.plat = new Plataforma();
    
    this.sonidoActivado = true;
    this.audioHabilitado = false;
    
    this.botonJugar    = {x: 220, y: 250, w: 200, h: 40, texto:"JUGAR"};
    this.botonCreditos = {x: 220, y: 310, w: 200, h: 40, texto:"Créditos"};
    this.botonTutorial = {x: 220, y: 370, w: 200, h: 40, texto:"Tutorial"};
    this.botonSonido   = {x: 20,  y: 420, w: 50,  h: 50};
  }

  actualizar() {
    
    if (this.estado === 'inicio') this.pantallaInicio();
    else if (this.estado === 'gameover') this.pantallaGameOver();
    else if (this.estado === 'jugando') this.jugar();
    else if (this.estado === 'victoria') this.pantallaVictoria();
    else if (this.estado === 'creditos') this.pantallaCreditos();
    else if (this.estado === 'tutorial') this.pantallaTutorial();
    
  }

  MostrarHud() {
    
    if (this.estado === 'jugando') {
      push();
      textSize(16);
      fill(255);
      textAlign(LEFT, TOP);
      text("Puntos: " + this.puntos, 10, 10);
      textAlign(RIGHT, TOP);
      text("Vidas: " + this.vidas, width - 10, 10);
      pop();
      
    }
  }

  evaluarColisionesMonedas() {
    
    if (!this.jugador) return;
    for (let i = this.monedas.length - 1; i >= 0; i--) {
      let m = this.monedas[i];
      let distancia = dist(this.jugador.x + 16, this.jugador.y + 16, m.x + 16, m.y + 16);
      if (distancia < 21) {
        this.monedas.splice(i, 1);
        this.puntos += 1;
      }
    }
    if (this.monedas.length === 0) this.estado = "victoria";
  }

  evaluarColisionMinotauro() {
    
    if (!this.jugador || !this.minotauro) return;
    let distancia = dist(this.jugador.x + 16, this.jugador.y + 16, this.minotauro.x + 16, this.minotauro.y + 16);
    if (distancia < 32) {
      this.vidas -= 1;
      if (this.vidas <= 0) { this.estado = "gameover"; return; }
      // Reiniciar posiciones
      for (let i = 0; i < this.plat.filas; i++) {
        for (let j = 0; j < this.plat.columnas; j++) {
          if (this.plat.plataform[i][j] === 4) {
            this.jugador.x = j * 32;
            this.jugador.y = i * 32;
            this.jugador.targetX = j*32;
            this.jugador.targetY = i*32;
            this.jugador.moviendose = false;
          }
          
          if (this.plat.plataform[i][j] === 5) {
            this.minotauro.x = j * 32;
            this.minotauro.y = i * 32;
            this.minotauro.targetX = j*32;
            this.minotauro.targetY = i*32;
            this.minotauro.moviendose = false;
            
          }
        }
      }
    }
  }

  reiniciarJuego() {
    
    this.estado = "inicio";
    this.vidas = this.vidasInicial;
    this.puntos = 0;
    this.rocas = [];
    this.monedas = [];
    this.jugador = null;
    this.minotauro = null;
  }

  presionarTecla() {
    
    if (this.jugador) {
      if (keyIsDown(RIGHT_ARROW)) this.jugador.move(0);
      if (keyIsDown(DOWN_ARROW))  this.jugador.move(1);
      if (keyIsDown(LEFT_ARROW))  this.jugador.move(2);
      if (keyIsDown(UP_ARROW))    this.jugador.move(3);
    }
    
    if (this.minotauro) {
      if (keyIsDown(68)) this.minotauro.move(0);
      if (keyIsDown(83)) this.minotauro.move(1);
      if (keyIsDown(65)) this.minotauro.move(2);
      if (keyIsDown(87)) this.minotauro.move(3);
    }
    if (key === ' ' && this.estado !== 'jugando') this.reiniciarJuego();
  }

  presionarMouse() {
    
    if (this.estado !== 'inicio') return;
    if (!this.audioHabilitado) { userStartAudio(); this.audioHabilitado = true; }
    if (mouseX > this.botonSonido.x && mouseX < this.botonSonido.x + this.botonSonido.w &&
        mouseY > this.botonSonido.y && mouseY < this.botonSonido.y + this.botonSonido.h) {
      this.sonidoActivado = !this.sonidoActivado;
      if (this.sonidoActivado) { musica.loop(); musica.setVolume(0.5); }
      else musica.stop();
    }
    
    if (mouseX > this.botonJugar.x && mouseX < this.botonJugar.x + this.botonJugar.w &&
        mouseY > this.botonJugar.y && mouseY < this.botonJugar.y + this.botonJugar.h) this.iniciarJuego();
    if (mouseX > this.botonCreditos.x && mouseX < this.botonCreditos.x + this.botonCreditos.w &&
        mouseY > this.botonCreditos.y && mouseY < this.botonCreditos.y + this.botonCreditos.h) this.estado = 'creditos';
    if (mouseX > this.botonTutorial.x && mouseX < this.botonTutorial.x + this.botonTutorial.w &&
        mouseY > this.botonTutorial.y && mouseY < this.botonTutorial.y + this.botonTutorial.h) this.estado = 'tutorial';
        
  }

  iniciarJuego() {
    this.estado = "jugando";
    this.rocas = [];
    this.monedas = [];
    this.jugador = null;
    this.minotauro = null;

    for (let i = 0; i < this.plat.filas; i++) {
      for (let j = 0; j < this.plat.columnas; j++) {
        if (this.plat.plataform[i][j] === 1) this.rocas.push(new Roca(j*32, i*32));
        if (this.plat.plataform[i][j] === 2) this.monedas.push(new Moneda(j*32, i*32));
        if (this.plat.plataform[i][j] === 4) this.jugador = new Personaje(j*32, i*32, 25, this.plat, jugadorImg);
        if (this.plat.plataform[i][j] === 5) this.minotauro = new Personaje(j*32, i*32, 40, this.plat, minotauroImg);
      }
    }

    this.vidas = this.vidasInicial;
    this.puntos = 0;
  }

  jugar() {
    this.presionarTecla();
    
    for (let r of this.rocas) r.mostrar();
    for (let m of this.monedas) m.mostrar();
    
    this.jugador?.actualizar();
    this.jugador?.mostrar();
    
    this.minotauro?.actualizar();
    this.minotauro?.mostrar();
    
    this.evaluarColisionesMonedas();
    this.evaluarColisionMinotauro();
    
    this.MostrarHud();
  }

  // --- PANTALLAS ---
  pantallaInicio() {
    image(pantallaInicioImg, 0, 0, width, height);
    image(this.sonidoActivado ? sonidoOnImg : sonidoOffImg,
          this.botonSonido.x, this.botonSonido.y, this.botonSonido.w, this.botonSonido.h);
    push();
    fill(255); stroke(0);
    rect(this.botonJugar.x, this.botonJugar.y, this.botonJugar.w, this.botonJugar.h, 10);
    rect(this.botonCreditos.x, this.botonCreditos.y, this.botonCreditos.w, this.botonCreditos.h, 10);
    rect(this.botonTutorial.x, this.botonTutorial.y, this.botonTutorial.w, this.botonTutorial.h, 10);
    fill(0); textAlign(CENTER, CENTER); textSize(14);
    text(this.botonJugar.texto, this.botonJugar.x + this.botonJugar.w/2, this.botonJugar.y + this.botonJugar.h/2);
    text(this.botonCreditos.texto, this.botonCreditos.x + this.botonCreditos.w/2, this.botonCreditos.y + this.botonCreditos.h/2);
    text(this.botonTutorial.texto, this.botonTutorial.x + this.botonTutorial.w/2, this.botonTutorial.y + this.botonTutorial.h/2);
    pop();
  }

  pantallaGameOver() {
    push(); textAlign(CENTER,CENTER); textSize(25); fill(200,0,0);
    text("GAME OVER — Gana el MINOTAURO", width/2,height/2-20);
    textSize(15); fill(0);
    text("Toca el botón Espacebar para volver al inicio", width/2,height/2+20);
  }

  pantallaVictoria() {
    push(); textAlign(CENTER,CENTER); textSize(25); fill(0,150,0);
    text("VICTORIA DE TESEO", width/2,height/2-20);
    textSize(15); fill(0);
    text("Toca el botón Espacebar para volver al inicio", width/2,height/2+20);
  }

  pantallaCreditos() { image(creditospantallaImg,0,0,width,height); }
  pantallaTutorial() { background(100); textAlign(CENTER,CENTER); textSize(20); fill(255);
   text("Tutorial\nTeseo: movete con las flechas\nPara ganar: tomá las monedas\nMinotauro: movete con WASD\nObjetivo del minotauro: matar 2 veces a Teseo\nPresioná ESPACIO para volver", width/2, height/2);
  }
}

