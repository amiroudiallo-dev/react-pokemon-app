import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/PokemonList';
  
const App: FunctionComponent = () => {
// //  const [name, updateName] = useState<String>('Ali');
//     const [pokemons, updatePokemons] = useState<Pokemon[]>([]);

//     useEffect(() => {
//         updatePokemons(POKEMONS)
//     }, []);

 return (
  <>
    <PokemonList />
  </>
 )
}
  
export default App;