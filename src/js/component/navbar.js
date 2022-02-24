import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import NavItem from "./navitem";
import Button from "./button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
			<Row xs={2} md={4} lg={6} className="bg-light justify-content-between align-items-center">
				<Col>
					<Link to="/">
						<Image
						className="img-fluid w-50 ms-3"
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" />
					</Link>
				</Col>
				<Col>
					<DropdownButton size="lg" title={<Button number_of_favorites={actions.getFavoritesLength()} />} >
						{store.favorites.length > 0 ?
							store.favorites.map(item => <NavItem key={item.id} id={item.id} title={item.title} type={item.type} />) :
							<Dropdown.Item>(empty)</Dropdown.Item>
						}
					</DropdownButton>
				</Col>
			</Row>
	);
};
