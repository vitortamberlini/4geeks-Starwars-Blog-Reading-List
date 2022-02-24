import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
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
				<DropdownButton size="lg" title="Favorites">
					{store.favorites.length > 0 ?
						store.favorites.map(item => (
							<Dropdown.Item key={item.id}  href="#/action-1">
								<Row xs={2} md={4} lg={6} className="justify-content-between">
									<Col>{item.title}</Col>
									<Col className="p-0" >
										<i onClick={() => actions.removeFavorite(item.id)} className="bi bi-trash3-fill"></i>
									</Col>
								</Row>
							</Dropdown.Item>
						)) :
						<Dropdown.Item>(empty)</Dropdown.Item>}
				</DropdownButton>
				</Col>
			</Row>
	);
};
