import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './PokemonCard.css';

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

    //fonction pour formater l'affichage de la date.
    const formatDate = (date: Date): string => {
        var finalMonth: string = '';
        if (date.getMonth() < 10) {
            let month: number;
            month = date.getMonth() + 1;
            finalMonth = '0' + month;
            
        }
        console.log(finalMonth);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const formatType = (type: string): string => {
        let color: string;
       
        switch (type) {
          case 'Feu': 
            color = 'red lighten-1'; 
            break; 
          case 'Eau': 
            color = 'blue lighten-1'; 
            break; 
          case 'Plante': 
            color = 'green lighten-1'; 
            break; 
          case 'Insecte': 
            color = 'brown lighten-1'; 
            break; 
          case 'Normal': 
            color = 'grey lighten-3'; 
            break; 
          case 'Vol': 
            color = 'blue lighten-3'; 
            break; 
          case 'Poison': 
            color = 'deep-purple accent-1'; 
            break; 
          case 'Fée': 
            color = 'pink lighten-4'; 
            break; 
          case 'Psy': 
            color = 'deep-purple darken-2'; 
            break; 
          case 'Electrik': 
            color = 'lime accent-1'; 
            break; 
          case 'Combat': 
            color = 'deep-orange'; 
            break; 
          default: 
            color = 'grey'; 
            break; 
        }
       
        return `chip ${color}`;
    }




  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map((type) => (
                <small key={type} className={formatType(type)}> {type} </small>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;
