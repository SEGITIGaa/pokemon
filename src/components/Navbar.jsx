import { Link, Search, Filter } from "../exp";

const Navbar = ({ searchTerm, handleSearchChange, searchPokemon, type, filterType, setFilterType}) => {
  return (
    <nav className="nav">
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} searchPokemon={searchPokemon}/>
      <div className="row-center gap-5 w-full">
        <Filter type={type} setFilterType={setFilterType} filterType={filterType}/>
        <Link to={"/simpanan"} className="search-btn row-center gap-2 text-second">
          <img src="/Pokeball.svg" alt=""  className="w-6"/>
          simpanan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
