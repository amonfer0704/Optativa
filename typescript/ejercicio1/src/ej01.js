var nombre = "Pepe";
var curso = "2ºDAW";
var esRepetidor = false;
var notas = [8.5, 7.0, 4.9, 6];
function calcularMedia(notas) {
    if (notas.length === 0) {
        return 0;
    }
    var suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}
function notaFinal(notas, puntosExtra = 0) {
    var media = calcularMedia(notas);
    var notaConPuntos = media + puntosExtra;
    return notaConPuntos;
}
function mostrarBoletin(nombre, curso, notas, puntosExtra) {
    var notaDefinitiva = notaFinal(notas, puntosExtra);
    console.log("Boletín de notas");
    console.log("Nombre: " + nombre);
    console.log("Curso: " + curso);
    console.log("¿Es repetidor? " + (esRepetidor ? "Si" : "No"));
    console.log("Nota final: " + notaDefinitiva);
}
mostrarBoletin(nombre, curso, notas);
mostrarBoletin(nombre, curso, notas, 1.5);
export {};
//# sourceMappingURL=ej01.js.map