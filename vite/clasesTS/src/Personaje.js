export class Personaje {
    nombre;
    ataque;
    defensa;
    #vida; //esto es private
    constructor(_nombre, _ataque, _defensa, _vida) {
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.#vida = _vida;
    }
    saluda() {
        return "Bienvenido al juego " + this.nombre;
    }
    static info(p) {
        return "Personaje " + p.nombre + " tiene un ataque de " + p.ataque + ", defensa: " + p.defensa + " y le queda " + p.Vida + " de vida";
    }
    vivo() {
        if (this.Vida <= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Método para que dos personajes se ataquen entre ellos
     * @param atacante
     * @param defensor
     */
    static atacar(atacante, defensor) {
        let critico = Math.random();
        let daño = defensor.Defensa - atacante.Ataque;
        if (critico < 0.1) { //ataque crítico
            daño *= 2;
            console.log("Ataque crítico de " + atacante.Nombre + " a " + defensor.Nombre);
        }
        defensor.Vida -= daño;
        if (defensor.Vida < 0)
            defensor.Vida = 0;
    }
    get Nombre() { return this.nombre; }
    set Nombre(nombre) { this.nombre = nombre; }
    get Ataque() { return this.ataque; }
    set Ataque(ataque) { this.ataque = ataque; }
    get Defensa() { return this.defensa; }
    set Defensa(defensa) { this.defensa = defensa; }
    get Vida() { return this.#vida; }
    set Vida(vida) { this.#vida = vida; }
}
