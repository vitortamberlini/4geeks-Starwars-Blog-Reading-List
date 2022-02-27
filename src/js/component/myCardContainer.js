import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import MyCard from "../component/myCard";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const MyCardContainer = ({containerName}) => {
    const { store, actions } = useContext(Context);


    const fetchData = () => {
        const dataType = containerName.toLowerCase();


        if (dataType === "characters")
            return actions.getCharacters();
        else if (dataType === "planets")
            return actions.getPlanets();
    }


    return (<>
        <h3 className="text-danger" >{containerName}</h3>
        <div className="card-container d-flex flex-row flex-nowrap overflow-auto mx-5 mt-3 mb-5">
            {fetchData().map(item => <MyCard key={item.id} item={item}/>)}
        </div>
    </>);
}

export default MyCardContainer;