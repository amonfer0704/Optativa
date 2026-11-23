function puedePrestar(socio) {
    return socio.listaTitulos.length < 3;
}
function contacto(usuario) {
    return usuario.correo ? usuario.correo : "Sin correo";
}
const socio1 = {
    numCarne: 1,
    nombre: "Ana",
    correo: "ana@correo.com",
    fechaAlta: "2026-10-22",
    listaTitulos: ["Don Quijote", "La Celestina"],
    saludar() {
        console.log(`Hola, ${this.nombre}`);
    }
};
const socio2 = {
    numCarne: 2,
    nombre: "Luis",
    fechaAlta: "2026-10-22",
    listaTitulos: ["Libro 1", "Libro 2", "Libro 3"],
    saludar() {
        console.log(`Hola, ${this.nombre}`);
    }
};
const socio3 = {
    numCarne: 3,
    nombre: "Marta",
    fechaAlta: "2026-10-22",
    listaTitulos: [],
    saludar() {
        console.log(`Hola, ${this.nombre}`);
    }
};
const biblio1 = {
    numCarne: 100,
    nombre: "Carmen",
    correo: "carmen@biblioteca.es",
    fechaAlta: "2025-01-10",
    turno: "mañana",
    listaPermiso: ["prestar", "devolver"]
};
const biblio2 = {
    numCarne: 101,
    nombre: "Pedro",
    fechaAlta: "2025-03-05",
    turno: "tarde",
    listaPermiso: ["prestar"]
};
console.log(puedePrestar(socio1)); // true  (2 préstamos)
console.log(puedePrestar(socio2)); // false (3 préstamos)
console.log(puedePrestar(socio3)); // true  (0 préstamos)
console.log(contacto(socio1)); // ana@correo.com
console.log(contacto(socio2)); // Sin correo
console.log(contacto(biblio1)); // carmen@biblioteca.es
console.log(contacto(biblio2));
export {};
//# sourceMappingURL=ej06.js.map