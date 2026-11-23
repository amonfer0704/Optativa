var Prioridad;
(function (Prioridad) {
    Prioridad[Prioridad["Baja"] = 1] = "Baja";
    Prioridad[Prioridad["Media"] = 2] = "Media";
    Prioridad[Prioridad["Alta"] = 3] = "Alta";
    Prioridad[Prioridad["Cr\u00EDtica"] = 4] = "Cr\u00EDtica";
})(Prioridad || (Prioridad = {}));
function filtrarPorEstado(indicencia, estado) {
    let filtradoIncidencias = new Array();
    for (let inc of indicencia) {
        if (inc.estado === estado) {
            filtradoIncidencias.push(inc);
        }
    }
    return filtradoIncidencias;
}
function urgentes(indicencia) {
    let indicenciasUrgentes = new Array();
    for (let inc of indicencia) {
        if (inc.prioridad >= 3 && inc.estado !== "RESUELTA") {
            indicenciasUrgentes.push(inc);
        }
    }
    return indicenciasUrgentes;
}
function cambiarEstado(indicencia, nuevoEstado) {
    let estadoAnterior = indicencia.estado;
    indicencia.estado = nuevoEstado;
    console.log("Incidencia: " + indicencia.id + ": " + estadoAnterior + " -> " + nuevoEstado);
    return indicencia;
}
let incidencias = [
    { id: "INC-1", titulo: "No arranca el ordenador", empleado: "Ana", prioridad: Prioridad.Alta, estado: "ABIERTA", fechaApertura: "2026-10-18" },
    { id: "INC-2", titulo: "Cambiar el ratón", empleado: "Luis", prioridad: Prioridad.Baja, estado: "EN_CURSO", fechaApertura: "2026-10-19" },
    { id: "INC-3", titulo: "Servidor caído", empleado: "Marta", prioridad: Prioridad.Crítica, estado: "ABIERTA", fechaApertura: "2026-10-20" },
    { id: "INC-4", titulo: "Instalar un programa", empleado: "Pablo", prioridad: Prioridad.Media, estado: "RESUELTA", fechaApertura: "2026-10-15" },
    { id: "INC-5", titulo: "Sin acceso a la red", empleado: "Sara", prioridad: Prioridad.Alta, estado: "RESUELTA", fechaApertura: "2026-10-16" }
];
console.log("Abiertas:");
console.log(filtrarPorEstado(incidencias, "ABIERTA"));
console.log("Resueltas:");
console.log(filtrarPorEstado(incidencias, "RESUELTA"));
console.log("Urgentes:");
console.log(urgentes(incidencias));
let primera = incidencias[0];
if (primera) {
    cambiarEstado(primera, "EN_CURSO");
}
let tercera = incidencias[2];
if (tercera) {
    cambiarEstado(tercera, "RESUELTA");
}
console.log("Urgentes después de los cambios:");
console.log(urgentes(incidencias));
export {};
//# sourceMappingURL=ej05.js.map