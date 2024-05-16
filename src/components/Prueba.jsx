import React, { useState } from 'react';
import useApi from '../hook/useApi'; // Importar el hook useApi

const Prueba = () => {
  // Definir el estado para almacenar el nombre del Pokémon
  const [pokemonName, setPokemonName] = useState('');

  // Obtener los datos, estado de carga y error del hook useApi
  const { data, loading, error, consultarApi } = useApi();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga predeterminada del formulario
    consultarApi(pokemonName); // Llamar a la función consultarApi con el nombre del Pokémon
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Pokémon:</label>
        <input
          type="text"
          placeholder="Introduce el nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)} // Actualizar el estado con el valor del input
        />
        <button type="submit">Buscar</button>
      </form>
      {/* // Mostrar mensaje de carga mientras se espera la respuesta de la API */}
      {loading && <p>Cargando...</p>} 
      {error && <p>Error: {error.message}</p>} 
      {/* // Mostrar mensaje de error en caso de que haya uno */}
      {data && (
        <div>
          <h2>{data.name}</h2>
        <p>Abilities: {data.abilities.map((ability) => ability.name).join(', ')}</p>
        <p>Base Experience: {data.base_experience}</p>
        <img src={data.sprites.front_default} alt={data.name} />
          {/* Mostrar otros datos relevantes de la respuesta de la API aquí */}
        </div>
      )}
    </div>
  );
};

export default Prueba;
