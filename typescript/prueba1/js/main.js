"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const h11 = document.getElementById("h11");
var marca = "Ford";
//marca = 5;
var myArray = new Array();
myArray.push(true);
myArray.push(false);
//myArray.push("hola");
for (let elem of myArray) {
    console.log(elem);
}
var person1 = {
    name: "Pepe",
    age: 45,
    mail: "pepe@mail.com"
};
if (h11 != undefined) {
    h11.innerHTML = person1.name + ", email: " + person1.mail;
}
console.log(10 / 0);
var alumn1 = ["Ana", "Pérez", 19, true];
var desconocido;
desconocido = 5;
if (typeof desconocido == "number") {
    console.log("Valor desconocido es: " + (desconocido + 6));
}
desconocido = "Hola";
desconocido += "Antonio";
var car1 = {
    matricula: "1234M",
    modelo: "Mustang",
    itv_pasada: true,
    color: "red"
};
//# sourceMappingURL=main.js.map