import React from "react";
import "../../styles/myCard.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const MyCard = (props) => {
    console.log(props);
    
    return (
        <Card className="my-card me-5 my-3">
            <Card.Img className="my-card-image" variant="top" src="https://placehold.jp/300x200.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="outline-primary">Learn More!</Button>
                    <Button variant="outline-warning">
                        <i class="bi bi-heart"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>		
);
}

export default MyCard;