
import { TarjetaLibro } from '../TarjetaLibro/TarjetaLibro'
export function Catalogo({libros, onAnadir, lectura}){
    if(libros.length === 0){
        return <p>No hay libros disponibles</p>
    }
    return (
        <>
            {libros.map((libro) => {
                const enLista = lectura.filter(function(elemento){
                    return elemento.id === libro.id;
                }).length > 0;
                return <TarjetaLibro key={libro.id} {...libro} onAnadir={onAnadir} enLista={enLista}></TarjetaLibro>
            })}
        </>
    )
}