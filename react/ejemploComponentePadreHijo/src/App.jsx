import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ComponenteHijo } from './assets/components/ComponenteHijo'
function App() {
  const [count, setCount] = useState(0)

  let edad = 30;

  return (
    <>
      <main>
        <ComponenteHijo nombre = "Juan" edad = {edad}>
          <h2 style= {{color: "pink"}}>Título del componente Hijo 1</h2>
        </ComponenteHijo>
      </main>
    </>
  )
}

export default App
