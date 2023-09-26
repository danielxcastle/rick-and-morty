import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FavsDropdown } from "./FavsDropdown";



export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="navbar sticky-top">
			<div className="rick-logo">
				<img 
				src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rick-and-morty-falling-portal-to-portal-obanz-caris.jpg"style={{height:"100px", width: "135px"}} 
				onClick={() => {
					navigate(`/`)
				}}>

				</img>
				</div>
			<div className="ml-auto">
				
					<FavsDropdown />
				
			</div>
		</nav>
	);
};
