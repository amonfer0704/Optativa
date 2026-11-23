type Stock = {[codigo: string]: number};
const stock: Stock = {};

stock["TORN-01"] = 25;
stock["MART-02"] = 100;

function reponer(stock: Stock, unidades: number, codigo: string){
    if(stock[codigo] === undefined){
        stock[codigo] = unidades;
    }
    else{
        stock[codigo] = stock[codigo] + unidades;
    }
}

function vender(stock: Stock, unidades: number, codigo: string): boolean{
    if(stock[codigo] === undefined){
        return false;
    }
    if(stock[codigo] < unidades){
        return false
    }
    stock[codigo] = stock[codigo] - unidades;
    return true;
}

function informe(stock: Stock, minOpcional: number = 5): string[]{
    const productos: string[] = [];
    for(var producto of Object.keys(stock)){
        const unidades = stock[producto];
        if (unidades !== undefined && unidades < minOpcional) {
            productos.push(producto);
        }
    }
    return productos;
}

function buscarUnidades(stock: Stock, codigo: string): number | string{
    var numUnidades = stock[codigo];
    if(numUnidades === undefined){
        return "No existe";
    }
    return numUnidades;
}