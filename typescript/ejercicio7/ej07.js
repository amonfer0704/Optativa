const stock = {};
stock["TORN-01"] = 25;
stock["MART-02"] = 100;
function reponer(stock, unidades, codigo) {
    if (stock[codigo] === undefined) {
        stock[codigo] = unidades;
    }
    else {
        stock[codigo] = stock[codigo] + unidades;
    }
}
function vender(stock, unidades, codigo) {
    if (stock[codigo] === undefined) {
        return false;
    }
    if (stock[codigo] < unidades) {
        return false;
    }
    stock[codigo] = stock[codigo] - unidades;
    return true;
}
function informe(stock, minOpcional = 5) {
    const productos = [];
    for (var producto of Object.keys(stock)) {
        const unidades = stock[producto];
        if (unidades !== undefined && unidades < minOpcional) {
            productos.push(producto);
        }
    }
    return productos;
}
function buscarUnidades(stock, codigo) {
    var numUnidades = stock[codigo];
    if (numUnidades === undefined) {
        return "No existe";
    }
    return numUnidades;
}
export {};
//# sourceMappingURL=ej07.js.map