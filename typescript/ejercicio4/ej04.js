function mensajeCliente(pedido) {
    let mensaje = "Número de pedido " + pedido.pedido + "\nNombre del cliente " + pedido.nombreCliente +
        "\nImporte " + pedido.importe + "\nEstado del pedido ";
    switch (pedido.estado) {
        case "pendiente":
            mensaje += "pendiente";
            break;
        case "enviado":
            mensaje += "enviado";
            break;
        case "entregado":
            mensaje += "entregado";
            break;
        case "cancelado":
            mensaje += "cancelado";
            break;
        case "pagado":
            mensaje += "pagado";
            break;
        default: mensaje += "sin información almacenada";
    }
    return mensaje;
}
function error(mensaje) {
    throw new Error(mensaje);
}
function cancelarPedido(pedido) {
    if (pedido.estado === "entregado") {
        error("El paquete ya ha sido entregado");
    }
    else {
        pedido.estado = "cancelado";
    }
}
const pedido1 = {
    pedido: 101,
    nombreCliente: "Lucía",
    importe: 55.90,
    estado: "pendiente"
};
const pedido2 = {
    pedido: 102,
    nombreCliente: "Carlos",
    importe: 120.50,
    estado: "entregado"
};
console.log(mensajeCliente(pedido1));
console.log("Estado antes:", pedido1.estado);
cancelarPedido(pedido1);
console.log("Estado después:", pedido1.estado);
export {};
//# sourceMappingURL=ej04.js.map