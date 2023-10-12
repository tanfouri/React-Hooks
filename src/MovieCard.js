// MovieCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;


