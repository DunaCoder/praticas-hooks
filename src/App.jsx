import { useState } from 'react'
//se llama nuestro hook donde se va usar
import useCounter from './hook/useCounter'

import './App.css'


//se crea un custom hook 
function useActive(){
    
  const [active, setAtive] = useState(true)
  

  //se crea la logica del hook en este caso cambiar de true a false
  const handleToggle = () => setAtive(!active)
  const handleFalse = () => setAtive(false)
  const handleTrue = () => setAtive(true)
  //se devuelven la variable del useState y la funcion 
  return{
    active,
    handleToggle,
    handleFalse,
    handleTrue
  }
}

function App() {

  //se llama el custom hook en el componente donde se vaya a usar

  const {active, handleToggle,handleFalse,handleTrue} = useActive()

//destruturamos nuestra varibles y funciones del hook
  const{  count, incrementar, decrement} = useCounter()
  return (
    <>
   <div>
   <h1>
      {active.toString()}
   </h1>

  <button onClick={handleToggle}>
    click
  </button>



   <button onClick={handleFalse}>
    click
   </button>
   <button onClick={handleTrue}>
    click
   </button>
   </div>
   <div>
   //otro uso en otro componente
<ShowInfo/>
<Prueba/>
   </div>
   <div>

    <h1> contador</h1>
    {/* aqui se usa nuestro hook en el componente */}
    <h2>{count}</h2>
    <button onClick={incrementar}>
      agregar
    </button>
    <button onClick={decrement}>
      quitar
    </button>
   </div>
    </>
  )
}

import React from 'react'
import Prueba from './components/Prueba'

const ShowInfo = () => {
    const {active, handleToggle} = useActive()
  return (
    <div style={{background: "#000", color: 'white'}}
    >ShowInfo
    <div>
        <button onClick={() => handleToggle()}> show/hide</button>
       {active &&(
        <div>
          <h1>User Info</h1>
        </div>
        )}
    </div>
    </div>
    
  )
}




export default App
