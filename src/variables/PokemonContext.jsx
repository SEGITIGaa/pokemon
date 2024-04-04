import { useState, useContext, createContext } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [savedPokemon, setSavedPokemon] = useState([]);

  const savePokemon = (pokemonData) => {
    const isDuplicate = savedPokemon.some(pokemon => pokemon.id === pokemonData.id || pokemon.alias === pokemonData.alias);
    if (!isDuplicate) {
      setSavedPokemon([...savedPokemon, pokemonData]);
      alert(`${pokemonData.name} berhasil di simpan dengan alias "${pokemonData.alias}"`);
    } else {
      alert("Pokemon dengan id atau alias yang sama sudah ada.");
    }
  };

  const removePokemon = (pokemonId) => {
    const updatedPokemon = savedPokemon.filter(pokemon => pokemon.id !== pokemonId);
    setSavedPokemon(updatedPokemon);
    alert("Pokemon berhasil dihapus!");
  };

  return (
    <PokemonContext.Provider value={{ savedPokemon, savePokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
