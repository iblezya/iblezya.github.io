
// F U N C T I O N S
function esTriangulo(a, b, c) {
  let condicion1 = c - b < a && a < b + c;
  let condicion2 = a - c < b && b < a + c;
  let condicion3 = a - b < c && c < b + a;
  return condicion1 && condicion2 && condicion3;
}
function tipoTriangulo(a, b, c) {
  let tipo = "-";
  if (esTriangulo(a, b, c)) {
    // Evaluando el tipo de triangulo
    if (a === b && b === c && a === c) {
      tipo = "EQUILATERO";
      $("#equilatero").show(500);
    } else if (a === b || b === c || a === c) {
      tipo = "ISOCELES";
      $("#isosceles").show(500);
    } else {
      tipo = "ESCALENO";
      $("#escaleno").show(500);
    }
  }
  // Devolver el valor del tipo
  return tipo;
}
function calcularPerimetro(a, b, c) {
  // Inicializar el perimetro
  let perimetro = 0;
  if (esTriangulo(a, b, c)) {
    //Calculando el perimetro
    perimetro = a + b + c;
  }
  // Devolver el valor del perimetro
  return perimetro;
}
function calcularArea(a, b, c) {
  //Inicializar el area
  let area = 0;
  if (esTriangulo(a, b, c)) {
    //Calculando el area
    //Calculando el semi-perimetro
    //invocando a la funcion del perimetro
    let sp = calcularPerimetro(a, b, c) / 2;
    // Calulando el area
    area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
  }
  //Devolver el valor del area
  return area;
}
