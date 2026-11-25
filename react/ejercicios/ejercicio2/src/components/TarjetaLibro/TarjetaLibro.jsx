
export function TarjetaLibro({id, titulo, autor, paginas, disponible = true, onAnadir, enLista}){
    var tituloMayuscula = titulo.toUpperCase();
    function colorTexto(disponible){
        return disponible?"green":"gray";
    }
    function anadir(){
        onAnadir(id, titulo)
    }
    return(
        <>
            <h2>Título: {tituloMayuscula}</h2>
            <p>Autor: {autor}</p>
            <p>Número de páginas: {paginas}</p>
            {paginas < 200 && <span>Lectura corta</span>}
            <p>Disponibilidad: <span style={{color: colorTexto(disponible)}}>{disponible?"Disponible":"Prestado"}</span></p>
            <input type="button" value="Añadir a mi lista" onClick={anadir} disabled={!disponible || enLista}></input>        </>
    )
}