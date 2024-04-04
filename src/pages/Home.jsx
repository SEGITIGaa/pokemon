import {
  ConfigAxios,
  axios,
  useState,
  useEffect,
  PokeCard,
  usePokemonContext,
  Navbar,
  Modal,
  InfiniteScroll,
} from "../exp";

const Home = () => {
  const [pokemonDataToSave, setPokemonDataToSave] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(60);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [pokeList, setPokeList] = useState([]);
  const { savePokemon } = usePokemonContext();
  const [error, setError] = useState(null);
  const [alias, setAlias] = useState("");
  const [type, setType] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokeList.filter((pokemon) => {
    if (pokemon.types && pokemon.types.length > 0) {
      return pokemon.types.some((type) => type.type.name === filterType);
    }
    return false;
  });

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSavePokemon = () => {
    if (pokemonDataToSave && alias.trim() !== "") {
      const pokemonWithAlias = { ...pokemonDataToSave, alias: alias.trim() };
      savePokemon(pokemonWithAlias);
      setPokemonDataToSave(null);
      setAlias("");
      setIsOpen(false);
    }
  };

  const getType = async () => {
    const response = await ConfigAxios.get("/type/");
    setType(response.data.results);
  };

  const getPokemon = async () => {
    const response = await ConfigAxios.get(
      `/pokemon/?offset=${
        (currentPage - 1) * itemsPerPage
      }&limit=${itemsPerPage}`
    );
    const newPokemonList = await getdetail(response.data.results);
    setPokeList((prevPokeList) => {
      const filteredNewPokemonList = newPokemonList.filter(
        (newPokemon) => !prevPokeList.some((poke) => poke.id === newPokemon.id)
      );
      return [...prevPokeList, ...filteredNewPokemonList];
    });
  };

  const getdetail = async (res) => {
    const detailPoke = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    return detailPoke;
  };



  const searchPokemon = async () => {
    try {
      const response = await ConfigAxios.get(
        `/pokemon/${searchTerm.toLowerCase()}`
      );
      setPokeList([response.data]);
      setError(null);
    } catch (error) {
      console.error("gagal searching Pokemon:", error);
      if (searchTerm !== "") {
        setError("Pokemon ngga ketemu");
      }
    }
  };

  useEffect(() => {
    getPokemon();
    getType();
  }, [currentPage]);

 

  return (
    <div className="col-center-center gap-5 min-h-screen w-full px-5 md:px-0 bg-main py-10 bg-section-bg bg-cover bg-no-repeat bg-fixed">
      <Navbar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        searchPokemon={searchPokemon}
        type={type}
        setFilterType={setFilterType}
        filterType={filterType}
      />

      {error && <p>{error}</p>}

      <InfiniteScroll
        dataLength={pokeList.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>semua pokemon sudah di muat</b>
          </p>
        }
        className="layout-grid w-full min-h-[700px]"
      >
        {filteredPokemon.length > 0
          ? filteredPokemon.map((e, i) => (
              <PokeCard
                key={i}
                pokemonInfo={e}
                onSavePokemon={() => {
                  setPokemonDataToSave(e);
                  openModal();
                }}
              />
            ))
          : pokeList.length > 0 &&
            pokeList.map((e, i) => (
              <PokeCard
                key={i}
                pokemonInfo={e}
                onSavePokemon={() => {
                  setPokemonDataToSave(e);
                  openModal();
                }}
              />
            ))}
      </InfiniteScroll>

      <Modal
        modalIsOpen={modalIsOpen}
        handleSavePokemon={handleSavePokemon}
        closeModal={closeModal}
        alias={alias}
        setAlias={setAlias}
        pokemonDataToSave={pokemonDataToSave}
      />
    </div>
  );
};

export default Home;
