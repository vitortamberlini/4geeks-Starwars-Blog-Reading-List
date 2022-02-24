import React from "react";

export const Button = ({number_of_favorites}) => {
    return (
        <>
            <span>Favorites&nbsp;</span>
            <span className="bg-secondary p-1 rounded me-1" >{number_of_favorites}</span>
        </>
    );
}

export default Button;