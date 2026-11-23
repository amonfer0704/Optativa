import { useState } from 'react';
import styles from './Marcador.module.css'
export function Marcador(){
    const [puntosLocal, setPuntosLocal] = useState(0);
    const [puntosVisitante, setPuntosVisitante] = useState(0);
    const [faltasLocal, setFaltasLocal] = useState(0);
    const [faltasVisitante, setFaltasVisitante] = useState(0);
    //let puntosLocal = 0;
    //let puntosVisitante = 0;
    let equipoLocal = "Local"
    let equipoVisitante = "Visitante"
    function anotar(equipo, punto){
        console.log(equipo + " + " + punto)
        if(equipo == "Local"){
            let totalPuntos = puntosLocal + punto;
            if(totalPuntos < 0){
                totalPuntos = 0;
            }
            setPuntosLocal(totalPuntos)
        }
        else{
            let totalPuntos = puntosVisitante + punto;
            if(totalPuntos < 0){
                totalPuntos = 0;
            }
            setPuntosVisitante(totalPuntos)
        }
    }
    function handleEmpezar(){
        alert("¡Que empiece el partido!")
    }

    function reiniciar(){
        setPuntosLocal(0);
        setPuntosVisitante(0);
        setFaltasLocal(0);
        setFaltasVisitante(0);
    }

    function diferenciaPuntos(puntosLocal, puntosVisitante){
        return puntosLocal - puntosVisitante;
    }

    function colorEquipo(diferencia){
        var color = "white"
        if(diferencia > 0){
            color = "pink";
        }
        return color;
    }

    function anotarFalta(equipo){
        if(equipo == "Local"){
            setFaltasLocal(faltasLocal + 1);
        }
        else{
            setFaltasVisitante(faltasVisitante + 1);
        }
    }
    return (
        <section>
            <div className={styles.equipoLocal} style={{backgroundColor: colorEquipo(diferenciaPuntos(puntosLocal, puntosVisitante))}}>
                <h2>{equipoLocal}</h2>
                <h1 className={styles.puntos}>{puntosLocal}</h1>
                <button onClick={() => anotar(equipoLocal, 1)}>+1</button>
                <button onClick={() => anotar(equipoLocal, 2)}>+2</button>
                <button onClick={() => anotar(equipoLocal, 3)}>+3</button>
                <button onClick={() => anotar(equipoLocal, 3)}>Canasta + adicional</button>
                <button onClick={() => anotar(equipoLocal, -1)}>-1</button>
                <button onClick={() => anotarFalta(equipoLocal)}>Falta</button>
                <p>Faltas: {faltasLocal}</p>
            </div>
            <br></br>
            <div className={styles.equipoVisitante} style={{backgroundColor: colorEquipo(diferenciaPuntos(puntosVisitante, puntosLocal))}}>
                <h2>{equipoVisitante}</h2>
                <h1 className={styles.puntos}>{puntosVisitante}</h1>
                <button onClick={() => anotar(equipoVisitante, 1)}>+1</button>
                <button onClick={() => anotar(equipoVisitante, 2)}>+2</button>
                <button onClick={() => anotar(equipoVisitante, 3)}>+3</button>
                <button onClick={() => anotar(equipoVisitante, 3)}>Canasta + adicional</button>
                <button onClick={() => anotar(equipoVisitante, -1)}>-1</button>
                <button onClick={() => anotarFalta(equipoVisitante)}>Falta</button>
                <p>Faltas: {faltasVisitante}</p>
            </div>
            <br></br>
            <button onClick={handleEmpezar}>Empezar partido</button>
            <br></br>
            <button onClick={reiniciar}>Reinciar</button>
            <br></br>
            <p>La diferencia es de {Math.abs(diferenciaPuntos(puntosLocal, puntosVisitante))}</p>
        </section>
    )
}