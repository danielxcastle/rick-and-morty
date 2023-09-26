import React, { useContext, useEffect, useState } from "react";
import PropTypes, { object } from "prop-types";
import { withRouter, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterInfo = (props) => {
  const [character, setCharacter] = useState();
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if ("characterId" in params) {
      fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
        .then((response) => response.json())
        .then((body) => {
          setCharacter(body);
        });
    }
  }, []);


  return (
    <div className="container info-container">
      {character && (
        <React.Fragment>
          <div className="row info-title">
            <div className="col">
              <h1 className="name-details-card">{character.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 info-details-left">
              <img className="info-img" src={character.image} />
            </div>
            <div className="col-6 info-details-right">
              Status: {character.status}
              <br></br><br></br>
              Species: {character.species}
              <br></br><br></br>
              Gender: {character.gender}
              <br></br><br></br>
              Origin: {character.origin.name}
            </div>

          </div>
        </React.Fragment>
      )}
    </div>
  );
};
