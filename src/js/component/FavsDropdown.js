import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const FavsDropdown = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // Define the handleItemClick function outside of the JSX
  const handleItemClick = (item) => {
    const character = store.characters.find(
      (character) => character.id === item.id && character.name === item.name
    );
    if (character) {
      navigate(`/views/CharacterInfo/${character.id}`);
    } else {
      const location = store.locations.find(
        (location) => location.id === item.id && location.name === item.name
      );
      if (location) {
        navigate(`/views/LocationInfo/${location.id}`);
      } else {
        const episode = store.episodes.find(
          (episode) =>  episode.id === item.id && episode.name === item.name
        );
        if (episode) {
          navigate(`/views/EpisodeInfo/${episode.id}`);
        }
      }
    }
  };

  return (
    <div className="btn-group fav-button">
      <button
        type="button"
        className="btn favs-button dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-persistence="true"
      >
        <i className="fas fa-star"></i>
      </button>
      <ul className="dropdown-menu">
        {store.favoritesList.length === 0 ? (
          <li>
            <a className="dropdown-link-nothing">Add items to show here!!!</a>
          </li>
        ) : (
          store.favoritesList.map((favorite, index) => (
            <li key={index}>
              <a
                className="dropdown-link"
                onClick={() => handleItemClick(favorite)}
              >
                {favorite.name}
              </a>
              <i
                className="fa-solid fa-trash delete-button"
                onClick={() => actions.removeFavorites(favorite)}
              ></i>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
