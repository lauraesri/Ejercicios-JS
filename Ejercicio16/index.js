class Cuadrado {
    constructor(lado) {
      this.lado = lado;
    }
  
    calcularPerimetro() {
      return 4 * this.lado;
    }
  
    calcularArea() {
      return this.lado ** 2;
    }
  }
  
  const cuadrados = [
    new Cuadrado(2),
    new Cuadrado(5),
    new Cuadrado(10)
  ];
  
  cuadrados.forEach((cuadrado) => {
    console.log(`El cuadrado de lado ${cuadrado.lado} cm tiene un perímetro de ${cuadrado.calcularPerimetro()} cm yun área de ${cuadrado.calcularArea()} cm2 `);
  });
  