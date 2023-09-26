import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Locations = (props) => {
  const [locations, setLocations] = useState([]);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const addToFavorites = (item) => {
    actions.addFavorite(item);
  };
  useEffect(() => {
    actions.getLocations();
  }, []);

  return (
    <div className="container">
      <div className="row title-list">
        <h1 className="titles">Locations</h1>
      </div>

      <div className="row d-flex flex-nowrap items-container">
        {store.locations.map((location, index) => (
          <div
            key={location.id}
            className="card"
            id={location.id}
            style={{ width: "18rem" }}
          >
            <img
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2018/06/2018-Cryptozoic-Rick-and-Morty-Season-1-300-thumb.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{location.name}</h5>
              <p className="card-text">Name: {location.name}</p>
              <p>Type: {location.type}</p>
              <div className="row bottom-buttons-card">
                <div className="col-4">
                  <button
                    className="btn  learn-more"
                    onClick={() => {
                      navigate(`/views/LocationInfo/${location.id}`);
                    }}
                  >
                    More...
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4 align-items-end">
                  <button
                    className="btn fav-button-card"
                    onClick={() => {
                      const isAlreadyInFavorites = store.favoritesList.some((item) => {
                        return location.id === item.id && location.name === item.name;
                      });
                  
                      if (isAlreadyInFavorites) {
                        actions.removeFavorites(location);
                      } else {
                        addToFavorites(location);
                      }
                    }}
                  >
                    <i
                      className="fas fa-star"
                     style={{
                        color: store.favoritesList.find((item) => {
                          if (
                            location.id === item.id &&
                            location.name === item.name
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

Locations.propTypes = {
  locations: PropTypes.object,
  onClick: PropTypes.func,
  history: PropTypes.object,
};
