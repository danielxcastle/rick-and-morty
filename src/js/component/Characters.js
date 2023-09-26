import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams,useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Characters = (props) => {
  const [ characters, setCharacters ] = useState([]);

  const { store, actions} = useContext(Context);
  const navigate = useNavigate();
  const addToFavorites = (item) => {
    actions.addFavorite(item);
  };
  
  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="container">
      <div className="row title-list">
        <h1 className="titles">Characters</h1>
      </div>

      <div className="row d-flex flex-nowrap items-container">
        {store.characters.map((character, index) => (
          <div
            key={character.id}
            className="card"
            id={character.id}

            style={{ width: "18rem" }}
          >
            <img
              src={character.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                Species: {character.species}
              </p>
              <p>
                Home: {character.origin.name}
              </p>
              <div className="row bottom-buttons-card">
                <div className="col-4">
              <div className="btn learn-more" onClick={() => {
                navigate(`/views/CharacterInfo/${character.id}`)
              }}>
                More...
              </div>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
              <button 
                className="btn fav-button-card"
                onClick={() => {
                  const isAlreadyInFavorites = store.favoritesList.some((item) => {
                    return character.id === item.id && character.name === item.name;
                  });
              
                  if (isAlreadyInFavorites) {
                    actions.removeFavorites(character);
                  } else {
                    addToFavorites(character);
                  }
                }}
                >
                <i 
                className="fas fa-star"
                style={{
                  color: store.favoritesList.find((item) => {
                    if (
                      character.id === item.id &&
                      character.name === item.name
                    ) {
                      return true;
                    }
                    return false;
                  }) === undefined

                    ? "black"
                    : "gold",
                }}
                ></i>
              </button>
              </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




Characters.propTypes = {
  characters: PropTypes.object,
  onClick: PropTypes.func,
  history: PropTypes.object
};

