
export function Caja({titulo, children}){

    return(
        <>
            <section style={{border:"1px solid black"}}>
                <h1>Título: {titulo}</h1>
                {children}
            </section>
        </>
    )
}