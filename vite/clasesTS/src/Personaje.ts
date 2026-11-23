export class Personaje{
    protected nombre: string;
    protected ataque: number;
    protected defensa: number;
    #vida: number; //esto es private

    constructor(_nombre: string, _ataque: number, _defensa: number, _vida: number){ //_vida: number = 100 si queremos poner por default algo en caso de que no pasen valor
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.#vida = _vida;
    }
    saluda(): string | boolean{
        return "Bienvenido al juego " + this.nombre;
    }

    static info(p: Personaje){
        return "Personaje " + p.nombre + " tiene un ataque de " + p.ataque + ", defensa: " + p.defensa + " y le queda " + p.Vida + " de vida";
    }

    vivo(){
        if(this.Vida <= 0){
            return false;
        }
        else{
            return true;
        }
    }
    /**
     * Método para que dos personajes se ataquen entre ellos
     * @param atacante 
     * @param defensor 
     */
    static atacar(atacante: Personaje, defensor: Personaje){
        let critico = Math.random();
        let daño = atacante.Ataque - defensor.Defensa;
        if(daño < 0){
            daño = Math.abs(daño);
        }
        if(critico < 0.1){ //ataque crítico
            daño *= 2;
            console.log("Ataque crítico de " + atacante.Nombre + " a " + defensor.Nombre);
        }
        defensor.Vida -= daño;
        if(defensor.Vida < 0) defensor.Vida = 0;
    }

    public get Nombre(): string {return this.nombre;}
    public set Nombre(nombre: string){this.nombre = nombre;}
    public get Ataque(): number {return this.ataque;}
    public set Ataque(ataque: number){this.ataque = ataque;}
    public get Defensa(): number {return this.defensa;}
    public set Defensa(defensa: number){this.defensa = defensa;}
    public get Vida(): number {return this.#vida;}
    public set Vida(vida: number){this.#vida = vida;}

}