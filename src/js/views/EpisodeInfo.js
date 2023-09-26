import React, { useContext, useEffect, useState } from "react";
import PropTypes, { object } from "prop-types";
import { withRouter, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EpisodeInfo = (props) => {
  const [episode, setEpisode] = useState();
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if ("episodeId" in params) {
      fetch(`https://rickandmortyapi.com/api/episode/${params.episodeId}`)
        .then((response) => response.json())
        .then((body) => {
          setEpisode(body);
        });
    }
  }, []);
  // let origin = character.origin;
  // console.log(origin.name);

  return (
    <div className="container info-container">
      {episode && (
        <React.Fragment>
          <div className="row info-title">
            <div className="col">
              <h1 className="name-details-card">{episode.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 info-details-left">
              <img className="info-img" src="https://www.trendsinternational.com/media/catalog/product/cache/a4e8c6cf4a1b4b3762beb6a2d8684888/2/0/2024-cartoon-network-rick-and-morty-wall-calendar-wall-245088-1.jpg" />
            </div>
            <div className="col-6 info-details-right">
              Status: {episode.episode}
              <br></br><br></br>
              Species: {episode.name}
              <br></br><br></br>
              Air Date: {episode.air_date}
   
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
