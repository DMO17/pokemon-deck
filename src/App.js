import "./App.css";
import { Header } from "./components/Header";
import { PokemonInfo } from "./containers/PokemonInfo";
import { PokemonProvider } from "./contexts/PokemonProvider";

function App() {
  return (
    <div>
      <Header />
      <PokemonProvider>
        <PokemonInfo />
      </PokemonProvider>
    </div>
  );
}

export default App;
