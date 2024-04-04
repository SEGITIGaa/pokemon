import { Router, Routes, Route, Home, PokemonProvider, SavedPokemonList } from "./exp";
import './App.css'

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simpanan" element={<SavedPokemonList/>} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
