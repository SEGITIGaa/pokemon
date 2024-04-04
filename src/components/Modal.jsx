import React from "react";

const Modal = ({ modalIsOpen, handleSavePokemon, pokemonDataToSave, closeModal, alias, setAlias }) => {
  return (
    modalIsOpen && (
        <div className="modal-bg">
            <div className="modal-container">
                <h2 className="text-second font-bold text-2xl">Save Pokemon</h2>
                {pokemonDataToSave && (
                    <input className="input-text" type="text" value={alias} onChange={(e) => setAlias(e.target.value)} placeholder="Enter alias"/>
                )}
                <div className="row-center gap-5">
                    <div className="modal-btn-primary" onClick={handleSavePokemon}>
                    simpan
                    </div>
                    <button className="modal-btn-secondary" onClick={closeModal}>
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    )
  );
};

export default Modal;
