const h11 = document.getElementById("h11");

var marca: string="Ford";

//marca = 5;
var myArray: boolean[] = new Array();

myArray.push(true);
myArray.push(false);
//myArray.push("hola");
for(let elem of myArray){
    console.log(elem);
}
interface Person{
    name: string,
    age: number,
    mail: string
}
var person1:Person = {
    name: "Pepe",
    age: 45,
    mail: "pepe@mail.com"
}
if(h11 != undefined){
    h11.innerHTML = person1.name + ", email: " + person1.mail;
}
console.log(10/0);

//nombre, apellido, edad, activo
type Alumn = [string, string, number, boolean];
var alumn1:Alumn = ["Ana", "Pérez", 19, true];

var desconocido:unknown;
desconocido = 5;
if(typeof desconocido == "number"){
    console.log("Valor desconocido es: " + (desconocido + 6));

}
desconocido = "Hola";
desconocido += "Antonio";
type Car = {
    matricula: string,
    modelo: string,
    itv_pasada: boolean,
    color: string
}
var car1: Car = {
    matricula: "1234M",
    modelo: "Mustang",
    itv_pasada: true,
    color: "red"   
}