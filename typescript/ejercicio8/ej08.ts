let variable: unknown;

function normalizarNombre(valor: unknown): string{
    let resultado;
    if(typeof valor === "string"){
        resultado = (valor.trim()).toUpperCase();
    }
    else{
        resultado = "NOMBRE INVÁLIDO";
    }
    return resultado;
}

function leerEdad(valor: unknown): number | null{
    let resultado = null;
    if(typeof valor === "number"){
        resultado = valor;
    }
    if(typeof valor === "string" && valor.trim() !== ""){
        let n = Number(valor);
        if (Number.isFinite(n)) {
            resultado = n;
        }
    }
    return resultado;
}

interface datosFormulario{
    usuario: string;
    email: string;
}
let recibido: unknown = {usuario: "ana", email: "ana@mail.com"};
let formulario = recibido as datosFormulario;