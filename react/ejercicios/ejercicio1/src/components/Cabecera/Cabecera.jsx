import './Cabecera.css'


export function Cabecera(){
    const nombrePabellon = "Pabellón Ana"
    return(
        <header>
            <h1>Marcador</h1>
            <p>{nombrePabellon}</p>
        </header>
    )
}