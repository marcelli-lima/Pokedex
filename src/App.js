import './App.css';
import Pokedex from './Pokedex';
import data from './data'

function App() {
  return (
    <div className="Pokedex">
      <h1>Minha Pokedex</h1>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;
