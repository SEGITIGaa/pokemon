import React from "react";

const Filter = ({type, filterType, setFilterType}) => {
  return (
    <select name="pokemonFilter" id="pokemon-filter" value={filterType} onChange={(e) => setFilterType(e.target.value)} className="input-select">
      <option value="">pilih tipe</option>
      {type.map((e, i) => (
        <option value={e.name} key={i}>
          {e.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
