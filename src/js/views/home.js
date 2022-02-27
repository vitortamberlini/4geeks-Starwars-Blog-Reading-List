import React from "react";
import "../../styles/home.css";
import MyCardContainer from "../component/myCardContainer"

export const Home = () => (
	<div className="d-flex flex-column mx-5 mt-3">
		<MyCardContainer containerName="Characters"/>
		<MyCardContainer containerName="Planets"/>
	</div>
);
