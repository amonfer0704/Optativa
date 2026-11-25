
export function Buscador({onBuscar}){
    function buscar(e){
        onBuscar(e.target.value)
    }
    return(
        <>
            <input type="text" onChange={buscar} placeholder="Buscar libros"/>
        </>

    )
}