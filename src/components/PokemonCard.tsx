import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './PokemonCard.css';
import formatDate from '../helpers/FormateDate';
import formatType from '../helpers/FormatType';
import { useHistory } from 'react-router-dom';


type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};
  
const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor= '#009688' }) => {
    
    const[color, updateColor] = useState<string>();

    //fonction pour afficher la bordure lors du passage de la souris.
    const showBorder = () => {
        updateColor(borderColor);
    }

    //fonction pour enlever la bordure lorsqu'on enleve la souris.
    const hideBorder = () => {
        updateColor('#f5f5f5');
    }

    const history = useHistory();
    // cette fonction renvoie les details d'un pokemon a partir de son identifiant.
    const gotoPokemon = (id: number) => {
      history.push(`/pokemons/${id}`);
    }

  return (
    <div className="col s6 m4" onClick={() => gotoPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map((type) => (
                <small key={type} className={formatType(type)}>{type}</small>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;
