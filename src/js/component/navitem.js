import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



export const NavItem = ({id, title, type}) => {
    const { actions } = useContext(Context);
    
    const removeFavorite = (e) => {
        e.stopPropagation();
        actions.removeFavorite(id);
	};

    return (
        <Dropdown.Item>
            <Row xs={2} md={4} lg={6} className="justify-content-between">
                <Link to={`/${type}/${id}`}>
                    <Col>{title}</Col>
                </Link>
                <Col className="p-0" >
                    <i onClick={(e) => removeFavorite(e)} className="bi bi-trash3-fill"></i>
                </Col>
            </Row>
        </Dropdown.Item>
    );
}

export default NavItem;