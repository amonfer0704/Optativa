import { useState } from "react";
import './Bombilla.css';

export function Bombilla(){
    const[encender, setEncender] = useState(false);

    function estadoBombilla(){
        setEncender(!encender);
    }

    return(
        <>
            <h2>La luz está {encender?"Encendida":"Apagada"}</h2>
            <p className={encender?"apagada":"encendida"}></p>
            <button onClick={estadoBombilla}>{encender?"Apagar":"Encender"}</button>
        </>
    )
}