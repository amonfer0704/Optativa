import {Personaje} from "./Personaje";

const info = document.getElementById("info");
const ataqueA = document.getElementById("ataqueA");
const ataqueB = document.getElementById("ataqueB");
if(!info)
  throw Error ("No existe info");
if(!ataqueA){
  throw new Error("No existe ataqueA");
}
if(!ataqueB){
  throw new Error("No existe ataqueB");
}
info.innerHTML = "Hello Vite + TS<br>";

//Nombre, ataque, defensa, vida
var personaje1 = new Personaje("Conan", 20, 30, 100);
personaje1.Vida += 100;
info.innerHTML += personaje1.saluda() + " " + personaje1.Vida;
var personaje2 = new Personaje("Pedro", 40, 30, 90);

ataqueA.innerHTML = `${personaje1.Nombre} ataca a ${personaje2.Nombre}`;
ataqueB.innerHTML = `${personaje2.Nombre} ataca a ${personaje1.Nombre}`;

info.innerHTML += "<br>" + Personaje.info(personaje1);
info.innerHTML += "<br>" + Personaje.info(personaje2);

ataqueA.onclick = () => {
  Personaje.atacar(personaje1, personaje2);
  info.innerHTML += "<br>" + `${personaje1.Nombre} ataca a ${personaje2.Nombre}. ${personaje2.Nombre} le queda ${personaje2.Vida} de vida`;
}

