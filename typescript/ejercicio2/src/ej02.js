function precioFinal(lineaCarrito) {
    var subtotal = lineaCarrito.cantidad * lineaCarrito.producto.precio;
    if (lineaCarrito.producto.descuentoPorcentaje !== undefined) {
        return subtotal - (lineaCarrito.producto.precio * lineaCarrito.producto.descuentoPorcentaje / 100);
    }
    return subtotal;
}
function totalCarrito(lineaCarrito) {
    var suma = 0;
    for (var lineas of lineaCarrito) {
        suma += precioFinal(lineas);
    }
    return suma;
}
var producto1 = {
    id: "P001", nombre: "Ratón", precio: 25.00
};
var producto2 = {
    id: "P002", nombre: "Teclado", precio: 59.99
};
var producto3 = {
    id: "P003", nombre: "Monitor", precio: 100.00
};
var carrito = [
    { producto: producto1, cantidad: 2 },
    { producto: producto2, cantidad: 1 },
    { producto: producto3, cantidad: 2 }
];
var totalFinal = totalCarrito(carrito);
console.log("Registro del carrito");
console.log("El precio total de la compra es " + totalFinal);
export {};
//# sourceMappingURL=ej02.js.map