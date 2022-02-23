import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from "react-router-dom";

export const Navbar = () => {
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
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</DropdownButton>
				</Col>
			</Row>
	);
};
