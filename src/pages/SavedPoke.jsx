import { usePokemonContext, CardUnsave } from ".././exp";

const SavedPokemonList = () => {
  const { savedPokemon, removePokemon } = usePokemonContext();

  const handleRemovePokemon = (pokemonId) => {
    removePokemon(pokemonId);
  };

  return (
    <div className="col-center-center gap-5 min-h-screen w-full bg-main py-10 px-5 md:px-0 bg-section-bg bg-cover bg-no-repeat bg-fixed">
      <div className="fixed top-10 left-10 bg-black rounded-sm px-8 py-2 text-second cursor-pointer" onClick={() => history.back()}>Kembali</div>
      <h1 className="text-black text-5xl font-bold">Pokemon saya</h1>
      <div className="layout-grid ">
        {savedPokemon.map((pokemon, index) => (
          <CardUnsave key={index}
            pokemonInfo={pokemon}
            handleRemovePokemon={handleRemovePokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedPokemonList;