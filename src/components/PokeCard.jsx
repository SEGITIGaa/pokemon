import { useState, useEffect } from "../exp";

const PokeCard = ({ pokemonInfo, onSavePokemon }) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  const fetchTypes = async () => {
    const types = pokemonInfo.types.map((typeInfo) => typeInfo.type.name);
    setPokeTypes(types);
  };

  const handleSaveClick = () => {
    onSavePokemon(pokemonInfo);
  };

  useEffect(() => {
    fetchTypes();
  }, [pokemonInfo]);

  return (
    <div className="card group">
      <div className="row-center-between w-full">
        <p className="pokemon-name">{pokemonInfo.name}</p>
        <div onClick={handleSaveClick} className="pokemon-bookmark">
          <img src="/save.svg" alt="save-icon" className="w-5 h-5" />
        </div>
      </div>

      <img
        src={pokemonInfo.sprites.other.home.front_default}
        alt=""
        className="pokemon-img"
      />

      <div className="pokemon-info-container">
        <div className="col-center-center gap-1 w-2/5">
          <div className="pokemon-desc">
            <img src="/height.svg" alt="pokemon-height" className="w-5" />
            <p>{pokemonInfo.height} M</p>
          </div>
          <div className="pokemon-desc">
            <img src="/weight.svg" alt="pokemon-weight" className="w-5" />
            <p>{pokemonInfo.weight}KG</p>
          </div>
        </div>

        <div className="col-center gap-2 w-1/3">
          {pokeTypes.map((type, index) => (
            <p key={index} className={`pokemon-type ${type}`}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardUnsave = ({ pokemonInfo, handleRemovePokemon }) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  const fetchTypes = async () => {
    const types = pokemonInfo.types.map((typeInfo) => typeInfo.type.name);
    setPokeTypes(types);
  };

  useEffect(() => {
    fetchTypes()
  }, [])


  return (
    <div className="card group h-max">
      <div className="row-center-between w-full">
        <div className="flex flex-col items-start">
          <p className="pokemon-name">{pokemonInfo.alias}</p>
          <p className="pokemon-name text-sm font-normal">({pokemonInfo.name})</p>
        </div>
        <div
          onClick={() => handleRemovePokemon(pokemonInfo.id)}
          className="pokemon-bookmark bg-red-500"
        >
          <img src="/remove.svg" alt="save-icon" className="w-5 h-5" />
        </div>
      </div>

      <img
        src={pokemonInfo.sprites.other.home.front_default}
        alt=""
        className="pokemon-img"
      />

      <div className="pokemon-info-container">
        <div className="col-center-center gap-1 w-2/5">
          <div className="pokemon-desc">
            <img src="/height.svg" alt="pokemon-height" className="w-5" />
            <p>{pokemonInfo.height} M</p>
          </div>
          <div className="pokemon-desc">
            <img src="/weight.svg" alt="pokemon-weight" className="w-5" />
            <p>{pokemonInfo.weight}KG</p>
          </div>
        </div>

        <div className="col-center gap-2 w-1/3">
          {pokeTypes.map((type, index) => (
            <p key={index} className={`pokemon-type ${type}`}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};


export { PokeCard, CardUnsave };
