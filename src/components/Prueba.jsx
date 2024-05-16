import React from 'react'
import useApi from '../hook/useApi';

const Prueba = () => {

    const {data, loading, error, consultarApi, datosBusqueda} = useApi()

    const { pokemon } = data;

    function handledSubmit(e){
        e.preventDefault();
        consultarApi(data)
        if (loading) {
            return <p>Cargando...</p>;
          }
        
          if (error) {
            return <p>Error: {error.message}</p>;
          }
        
        console.log("listo")
    }

 
  return (
    <div style={{background: "#000", color: 'white'}}>
        {error && <p>{error}</p>}

        Prueba
        <form onSubmit={handledSubmit}>
            <input type='text'
            onChange={datosBusqueda}
            name='pokemon'
            value={pokemon}
            placeholder='Buscar'
            ></input>
            <input
            type='submit'
            value="buscar"
            >
            </input>
        </form>
</div>
  )
}

export default Prueba