import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters";
import { Locations } from "../component/Locations";
import { Episodes } from "../component/Episodes";


export const Home = () => (
  <div className="container">
  <Characters />
  <Locations />
  <Episodes />
  </div>

);
