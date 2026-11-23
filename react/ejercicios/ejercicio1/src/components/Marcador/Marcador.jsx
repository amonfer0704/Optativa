import { useState } from 'react';
import styles from './Marcador.module.css'
export function Marcador(){
    const [puntosLocal, setPuntosLocal] = useState(0);
    const [puntosVisitante, setPuntosVisitante] = useState(0);
    //let puntosLocal = 0;
    //let puntosVisitante = 0;
    let equipoLocal = "Local"
    let equipoVisitante = "Visitante"
    function anotar(equipo, punto){
        console.log(equipo + " + " + punto)
        if(equipo == "Local"){
            setPuntosLocal(puntosLocal + punto)
        }
        else{
            setPuntosVisitante(puntosVisitante + punto)
        }
    }
    function handleEmpezar(){
        alert("¡Que empiece el partido!")
    }

    function reiniciar(){
        setPuntosLocal(0);
        setPuntosVisitante(0);
    }

    function diferenciaPuntos(puntosLocal, puntosVisitante){
        if(puntosLocal > puntosVisitante){
            return puntosLocal - puntosVisitante;
        }
        else{
            return puntosVisitante - puntosLocal;
        }
    }
    return (
        <section>
            <div className={styles.equipoLocal}>
                <h2>{equipoLocal}</h2>
                <h1 className={styles.puntos}>{puntosLocal}</h1>
                <button onClick={() => anotar(equipoLocal, 1)}>+1</button>
                <button onClick={() => anotar(equipoLocal, 2)}>+2</button>
                <button onClick={() => anotar(equipoLocal, 3)}>+3</button>
                <button onClick={() => anotar(equipoLocal, 3)}>Canasta + adicional</button>
            </div>
            <br></br>
            <div className={styles.equipoVisitante}>
                <h2>{equipoVisitante}</h2>
                <h1 className={styles.puntos}>{puntosVisitante}</h1>
                <button onClick={() => anotar(equipoVisitante, 1)}>+1</button>
                <button onClick={() => anotar(equipoVisitante, 2)}>+2</button>
                <button onClick={() => anotar(equipoVisitante, 3)}>+3</button>
            </div>
            <br></br>
            <button onClick={handleEmpezar}>Empezar partido</button>
            <br></br>
            <button onClick={reiniciar}>Reinciar</button>
            <br></br>
            <p>La diferencia es de {diferenciaPuntos(puntosLocal, puntosVisitante)}</p>
        </section>
    )
}