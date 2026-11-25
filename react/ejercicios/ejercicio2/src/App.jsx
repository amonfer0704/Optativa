import { useState } from 'react'
import './App.css'
import { libros } from './datos'
import { TarjetaLibro } from './components/TarjetaLibro/TarjetaLibro'
import { Catalogo } from './components/Catalogo/Catalogo'
import { Caja } from './components/Caja/Caja'
import { Buscador } from './components/Buscador/Buscador'
import { ListaLectura } from './components/ListaLectura/ListaLectura'

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [lectura, setLectura] = useState([]);


  function librosBuscados(libroBuscado){
    let librosBuscado = libros.filter(function(libro){
      return libro.titulo.toLocaleLowerCase().includes(libroBuscado.toLocaleLowerCase())})
    return librosBuscado
  }

  function anadir(id, titulo){
    const nuevo = {id: id, titulo: titulo, leido: false}
    setLectura([...lectura, nuevo]);
  }

  const librosFiltrados = librosBuscados(busqueda);

  return (
    <>
      <Buscador onBuscar={setBusqueda}></Buscador>
      <p>Mostrando {librosFiltrados.length} de {libros.length} libros</p>
<Caja titulo="Catálogo"><Catalogo libros={librosFiltrados} onAnadir={anadir} lectura={lectura} /></Caja>
      <Caja titulo={"Mi lista de lectura"}><ListaLectura lectura={lectura}></ListaLectura>
        
      </Caja>
    </>
  )
}

export default App
