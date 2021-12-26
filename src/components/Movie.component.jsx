import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Movie = ({
  id,
  moviename,
  actors,
  price,
  geners,
  year,
handleRemoveMovie
}) => {
    const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{moviename}</Card.Title>
        <div className="book-details">
          <div>actors: {actors}</div>
          <div>geners: {geners} </div>
          <div>Price: {price} </div>
          <div>year: {year}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveMovie(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;