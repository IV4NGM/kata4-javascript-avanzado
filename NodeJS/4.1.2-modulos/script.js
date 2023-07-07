const { PI, calcularAreaCirculo } = require("./moduloA");
const constantesFisicas1 = require("./misModulos/constantesFisicas");
const { funcionesGeometricas} = require("./misModulos/areasFiguras");
// Si se quiere renombrar funcionesGeometricas a areasFiguras:
// const { funcionesGeometricas: areasFiguras } = require("./misModulos/areasFiguras");

let areaDeCirculo = calcularAreaCirculo(5);
console.log(`El área del círculo es: ${areaDeCirculo}`);
console.log(`El valor de pi es ${PI}`);

console.log(`El valor de la gravedad es ${constantesFisicas1.valorGravedad} m/(s^2)`);

console.log(`El valor de la variable importada es ${funcionesGeometricas.miVariable}`)

let areaDelRectangulo = funcionesGeometricas.calcularAreaRectangulo(5,4);
console.log(`El área del rectángulo es ${areaDelRectangulo}`)

let areaDelTriangulo= funcionesGeometricas.calcularAreaTriangulo(5,4);
console.log(`El área del triángulo es ${areaDelTriangulo}`)