import React, { useContext, useEffect, useState } from "react";
import PropTypes, { object } from "prop-types";
import { withRouter, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationInfo = (props) => {
  const [location, setLocation] = useState();
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if ("locationId" in params) {
      fetch(`https://rickandmortyapi.com/api/location/${params.locationId}`)
        .then((response) => response.json())
        .then((body) => {
          setLocation(body);
        });
    }
  }, []);


  return (
    <div className="container info-container">
      {location && (
        <React.Fragment>
          <div className="row info-title">
            <div className="col name-details-card">
              <h1>{location.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 info-details-left">
              <img className="info-img" src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2018/06/2018-Cryptozoic-Rick-and-Morty-Season-1-300-thumb.jpg" />
            </div>
            <div className="col-6 info-details-right">
              Type: {location.type}
              <br></br><br></br>
              Dimension: {location.dimension}
              
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
