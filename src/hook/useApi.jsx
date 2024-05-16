//customHook para una api
//en este caso usare axios

//importamos useState y effect
import { useState} from 'react'
import axios from 'axios'

const useApi = () => {
    //siempre se deben crear estos estados para una api
    const [data, setData] = useState({
        pokemon: ''
    })

    const datosBusqueda = (e) => {
       setData(e.target.value);
      };
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //usamos effect y 
  
    const consultarApi = async (datos) =>{
            //aqui se hara la llamada
            const {pokemon} = datos

            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            try{
                setLoading(true)
                const respuesta = await axios (url)
                setData(respuesta.data)
                setLoading(false)
            }catch(err){
                //este se ejecuta cuando falla la llamada
                setError(err)
                setLoading(false)
            }
        }

  return{data, loading, error, consultarApi, datosBusqueda}
}

export default useApi