import { useState } from 'react'
import { ButtonOK } from './components/ButtonOK/ButtonOK';
import './App.css'
import { Bombilla } from './components/Bombilla/Bombilla';

function App() {
  var año = "2026";
  return (
    <main>
      <h1>Hello vite + react {año}</h1>
      <h2>Adiós</h2>
      <ButtonOK></ButtonOK>
      <Bombilla></Bombilla>
      
    </main>
  )
}

export default App

function sumar(num1, num2){
  return num1 + num2;
}