
export function ListaLectura({lectura}){

    return(
        <>
            <ul>
                {lectura.map(function(elemento){
                    return <li key={elemento.id}>{elemento.titulo}</li>
                })}
            </ul>  
        </>
    )
}