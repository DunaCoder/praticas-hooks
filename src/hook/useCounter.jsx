import { useState } from 'react'
//se llama useState para el custom hook
const useCounter = () => {
    //aqui se desaroola la logica del custom hook
    const [count, setCount] = useState(0);

    const incrementar = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    
  return {
    //y aqui se retorna para otros componentes
    count,
    incrementar,
    decrement
  }
}

export default useCounter