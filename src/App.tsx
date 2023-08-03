import React, { FunctionComponent } from 'react';
import PokemonList from './pages/PokemonList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PokemonsDetail from './pages/PokemonDetails';
import PageNotFound from './pages/PageNotFound';
import PokemonEdit from './pages/PokemonEdit';
  
const App: FunctionComponent = () => {
 return (
  <Router>
    <div>
        {/*** la barre de navigation commun a toutes les pages ***/}
      <nav>
        <div className="navbar-wrapper teal"> 
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div>
      </nav>
      {/** le systeme de gestion de navigation de notre application */}
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <Route exact path="/pokemons/:id" component={PokemonsDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
 )
}
  
export default App;