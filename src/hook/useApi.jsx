import React, { useState, useEffect } from 'react';

const useApi = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos del Pokémon
  const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando la información
  const [error, setError] = useState(''); // Estado para almacenar mensajes de error

  const consultarApi = async (pokemonName) => { // Función para consultar la API
    setLoading(true); // Indica que se está cargando la información
    setError(''); // Borra cualquier mensaje de error anterior

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Realiza la petición a la API
      const pokemonData = await response.json(); // Convierte la respuesta a JSON

      if (response.ok) { // Verifica si la petición fue exitosa
        setData(pokemonData); // Almacena los datos del Pokémon en el estado
        console.log(data)
      } else {
        setError('Error al buscar el Pokémon'); // Establece un mensaje de error
      }
    } catch (err) {
      setError('Error al conectar con la API'); // Establece un mensaje de error general
    } finally {
      setLoading(false); // Indica que la carga ha finalizado
    }
  };

  return { data, loading, error, consultarApi }; // Devuelve los estados y la función consultarApi
};

export default useApi;
