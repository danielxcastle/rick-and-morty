import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams,useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Episodes = () => {
  const [ episode, setEpisode ] = useState([]);

  const { store, actions} = useContext(Context);
  const navigate = useNavigate();
  const addToFavorites = (item) => {
    actions.addFavorite(item);
  };
  useEffect(() => {
    actions.getEpisodes();
  }, []);

  return (
    <div className="container">
      <div className="row title-list">
        <h1 className="titles">Episodes</h1>
      </div>

      <div className="row d-flex flex-nowrap items-container">
        {store.episodes.map((episode, index) => (
          <div
            key={episode.id}
            className="card"
            id={episode.id}

            style={{ width: "18rem" }}
          >
            <img
              src="https://www.trendsinternational.com/media/catalog/product/cache/a4e8c6cf4a1b4b3762beb6a2d8684888/2/0/2024-cartoon-network-rick-and-morty-wall-calendar-wall-245088-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{episode.name}</h5>
              <p className="card-text">
                Episode Name: {episode.name}
              </p>
              <p>
                Episode: {episode.episode}
              </p>
              <div className="row bottom-buttons-card">
                <div className="col-4">
              <div className="btn learn-more" onClick={() => {
                navigate(`/views/EpisodeInfo/${episode.id}`)
              }}>
                More...
              </div>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
              <button className="btn fav-button-card"
               onClick={() => {
                const isAlreadyInFavorites = store.favoritesList.some((item) => {
                  return episode.id === item.id && episode.name === item.name;
                });
            
                if (isAlreadyInFavorites) {
                  actions.removeFavorites(episode);
                } else {
                  addToFavorites(episode);
                }
              }}>
                <i 
                className="fas fa-star"
                style={{
                  color: store.favoritesList.find((item) => {
                    if (
                      episode.id === item.id &&
                      episode.name === item.name
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





