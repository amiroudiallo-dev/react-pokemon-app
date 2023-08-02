import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
//  const [name, updateName] = useState<String>('Ali');
    const [pokemons, updatePokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        updatePokemons(POKEMONS)
    }, []);

 return (
  <>
    <h1 className='center'>Pokédex</h1>
    <div className="container">
        <div className="row">
            { pokemons.map(({id, name, picture, created}) => 
                (
                    <div className="col s6 m4" key={id}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={picture} alt={name} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{name}</p>
                                    <p><small> {created.toLocaleDateString()} </small></p>
                                    <p><small> {created.toLocaleTimeString()} </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  </>
 )
}
  
export default App;