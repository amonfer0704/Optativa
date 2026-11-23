import { useState } from 'react'
import './App.css'
import { Cabecera } from './components/Cabecera/Cabecera'
import Pie from './components/Pie/Pie'
import { Marcador } from './components/Marcador/Marcador'


function App() {

  return (
    <main className="app">
      <Cabecera></Cabecera>
      <Marcador></Marcador>
      {/* Marcador */}
      <Pie></Pie>
    </main>
  )
}

export default App
