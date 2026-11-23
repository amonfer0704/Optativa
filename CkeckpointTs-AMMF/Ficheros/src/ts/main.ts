const DESCUENTONOCHE = 0.01;

/**
 * Enum tipo habitacion
 */
enum tipoHabitacion {
    INDIVIDUAL = "Individual",
    DOBLE = "Doble",
    SUITE = "Suite"
}
/**
 * Interfaz tipo Habitacion
 */
interface Habitaciones {
    readonly numHabitaciones: number,
    tipoHabitaciones: tipoHabitacion,
    precioHabitacion: number
}
/**
 * Objetos tipo habitacion para ejemplos
 */
const habitaciones = [
    {numHabitaciones: 101, tipoHabitaciones: "Individual", precioHabitacion: 55},
    {numHabitaciones: 102, tipoHabitaciones: "Doble", precioHabitacion: 80 },
    {numHabitaciones: 301, tipoHabitaciones: "Suite", precioHabitacion: 160 }
]

/**
 * type estadoReserva para las diferentes opciones de estado de reserva
 */
type estadoReserva = "confirmada" | "cancelada" | "finalizada";

/**
 * Interfaz tipo reserva 
 */
interface Reserva{
    readonly idReserva: string,
    nombreHuesped: string,
    email?: string,
    habitacion: number,
    estancia: [
        {
            fechaEntrada: string,
            numNoches: number
        }
    ],
    estadoReservas: estadoReserva
}
/**
 * Ejemplos de reservas
 */
const reservas = [{
    idReserva: 1,
    nombreHuesped: "Ana López",
    email: "ana@mail.com",
    habitacion: 102,
    estancia: ["2026-11-03", 3],
    estado: "confirmada"
},
{
    idReserva: 2,
    nombreHuesped: "Luis Pérez",
    habitacion: 301,
    estancia: ["2026-11-05", 2],
    estado: "confirmada"
},
{
    idReserva: 3,
    nombreHuesped: "Marta Ruiz",
    email: "marta@mail.com",
    habitacion: 101,
    estancia: ["2026-10-28", 4],
    estado: "finalizada"
},
{
    idReserva: 4,
    nombreHuesped: "Pablo Gil",
    habitacion: 102,
    estancia: ["2026-11-10", 5],
    estado: "cancelada"
}
]
/**
 * Función que, dado el número de una habitación, devuelva la habitación
 * o undefined si no existe
 */
function buscarHabitacion(numHabitacion: number, habitaciones: Habitaciones[]): Habitaciones|undefined{
    var resultado = undefined;
    for(var habitacion of habitaciones){
        if(numHabitacion === habitacion.numHabitaciones){
            resultado = habitacion;
        } 
    }
    return resultado;
}

/**
 * Función que, dada una reserva, calcule el importe precio por noche × noches,
 * con un 10 % de descuento si son 4 noches o más. Si la reserva tiene el estado 
 * cancelada vale 0.
 */
function calcularImporte(reserva: Reserva, habitacion: Habitaciones): number{
    var importeTotal = habitacion.precioHabitacion * reserva.estancia[0].numNoches;
    if(reserva.estadoReservas === "cancelada"){
        importeTotal = 0;
    }
    if(reserva.estancia[0].numNoches >= 4){
        importeTotal = importeTotal - (importeTotal * DESCUENTONOCHE);
    }
    return importeTotal;
}

/**
 * Type para el tipo de moneda
 */
type tipoMoneda = "$" | "€" | "£" | "¥";

/**
 * función que reciba un importe y un símbolo de moneda ($, €, £, ¥, …) y que
 * devuelva el importe con dos decimales y la moneda. La moneda es opcional y por defecto es
 * «€»
 */
function formatearImporte(importe: number, simbolo: tipoMoneda = "€"): string{
    var formato = importe + " ";
    switch(simbolo){
        case "€": formato + simbolo; break;
        case "$": formato + simbolo; break;
        case "£": formato + simbolo; break;
        case "¥": formato + simbolo; break;
        default: throw new Error("Error en el case de formatearImporte");
    }
    return formato;
}

/**
 * función en la que, recibido el estado de una reserva, devuelva un texto para
el cliente. Por ejemplo “confirmada” → “Reserva confirmada. ¡Te esperamos!”. Si mañana se
añade un estado y no se trata, el código no debe compilar.
*/
function mensaje(estado: estadoReserva): string{
    var texto;
    switch(estado){
        case "confirmada": texto = "Reserva confirmada. ¡Te esperamos!"; break;
        case "cancelada": texto = "Su reserva ha sido cancelada."; break;
        case "finalizada": texto = "Su reserva ha finalizado. ¡Espero que haya disfrutado la estancia!"; break;
        default: throw new Error("Error en el case mensaje");
    }
    return texto;
}

/**
 * Objeto con clave (tipoHabitacion) valor (number)
 */
type ocupacionType = Record<tipoHabitacion, number>;

/**
 * función que devuelva un objeto cuyas claves son los tipos de habitación y
 * cuyos valores son el número de reservas confirmadas de ese tipo.
 */

// function ocupacion(): ocupacionType{
//     let numReservasConfirmadas = 0;
//     const ocupaciones: ocupacionType;
//     for(var reserva of reservas){
//         if(reserva.estado === "confirmada"){
//             numReservasConfirmadas++;
//         }
//     }
//     for(var habita of habitaciones){
//         ocupaciones[habita.tipoHabitaciones] = numReservasConfirmadas;
//     }
// } 
/**
 * Buscar en la página
 */
let resultado = document.getElementById("resultado-consulta") as HTMLBodyElement;
document.getElementById("boton")?.addEventListener("click", function(){
    try{
        let id = document.getElementById("input-id") as HTMLInputElement;
        for(var reserva of reservas){
            let reser = reserva.idReserva + "";
            if(reser === id.value){
                            }
        }
    }
    catch(err){
        resultado.innerHTML = "No existe ninguna reserva con ese id";
    }
})
/**
 * Pintar en la página
 */

function llenarTabla():void{
    var tabla = document.getElementById("tabla-reservas") as HTMLBodyElement;
    for(let reserva of reservas){
        tabla.innerHTML = "<tr><td>"+reserva.idReserva + "</td><td>" +reserva.nombreHuesped +"</td>";
    }
    for(let habita of habitaciones){
        tabla.innerHTML += "<td>" + habita.numHabitaciones + "</td><td>" +"</td></tr>"
    }
}
llenarTabla();
