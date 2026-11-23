interface punto {
    latitud: number;
    longitud: number;
}
interface rutaRepartidor{
    punto1: punto;
    punto2: punto;
    punto3: punto;
    punto4: punto;
}
interface registroEntrega{
    codPaquete: string;
    puntoEntrega: punto;
    clienteFirma: boolean;
}
function distanciaAproximada(punto1: punto, punto2: punto): number{
    return Math.sqrt((Math.pow((punto2.latitud - punto1.latitud), 2) + Math.pow((punto2.longitud - punto1.longitud), 2)));
}

function distanciaTotal(ruta: rutaRepartidor): number{
    let tramo1 = distanciaAproximada(ruta.punto1, ruta.punto2);
    let tramo2 = distanciaAproximada(ruta.punto2, ruta.punto3);
    let tramo3 = distanciaAproximada(ruta.punto3, ruta.punto4);
    return tramo1 + tramo2 + tramo3;
}
const rutaReparto: rutaRepartidor = {
    punto1: { latitud: 40.4168, longitud: -3.7038 },
    punto2: { latitud: 41.3851, longitud: 2.1734 },
    punto3: { latitud: 39.4699, longitud: -0.3763 },
    punto4: { latitud: 37.3891, longitud: -5.9845 }
};
const entrega1: registroEntrega = {
    codPaquete: "0001", puntoEntrega: {latitud: 10, longitud: 20}, clienteFirma: true
}
const entrega2: registroEntrega = {
    codPaquete: "0002", puntoEntrega: {latitud: 40, longitud: 10}, clienteFirma: false
}
console.log("Entrega 1:", entrega1);
console.log("Entrega 2:", entrega2);
console.log("Distancia total:", distanciaTotal(rutaReparto));