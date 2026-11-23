import { useState } from "react";
import "./ComponenteHijo.css";

export function ComponenteHijo({nombre, edad, children}){
    return (
        <div className="claseCard">
            <div className="classHeader">
                {children}
            </div>
            <div className="classBody"></div>
            <p><strong>Nombre </strong> {nombre}</p>
            <p><strong>Edad </strong> {edad}</p>
            <button>Enviar</button>
        </div>
    );
}