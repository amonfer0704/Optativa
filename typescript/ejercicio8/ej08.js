let variable;
function normalizarNombre(valor) {
    let resultado;
    if (typeof valor === "string") {
        resultado = (valor.trim()).toUpperCase();
    }
    else {
        resultado = "NOMBRE INVÁLIDO";
    }
    return resultado;
}
function leerEdad(valor) {
    let resultado = null;
    if (typeof valor === "number") {
        resultado = valor;
    }
    if (typeof valor === "string" && valor.trim() !== "") {
        let n = Number(valor);
        if (Number.isFinite(n)) {
            resultado = n;
        }
    }
    return resultado;
}
let recibido = { usuario: "ana", email: "ana@mail.com" };
let formulario = recibido;
export {};
//# sourceMappingURL=ej08.js.map