import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const MovieForm = (props) => {
  const [movie, setmovie] = useState({
    moviename: props.movie ? props.movie.moviename : "",
    actors: props.movie ? props.movie.actors : "",
    genres: props.movie ? props.movie.genres : "",
    year: props.movie ? props.movie.year : "",
    date: props.movie ? props.movie.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { moviename, actors, year, genres } = movie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [moviename, actors, year, genres];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const movie = {
        id: uuidv4(),
        moviename,
        actors,
        year,
        genres,
        date: new Date(),
      };
      props.handleOnSubmit(movie);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
    //   case "genres":
    //     if (value === "" || parseInt(value) === +value) {
    //       setmovie((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //       }));
    //     }
    //     break;
      case "year":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setmovie((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setmovie((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>movie Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="moviename"
            value={moviename}
            placeholder="Enter name of movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="actors">
          <Form.Label>movie actors</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="actors"
            value={actors}
            placeholder="Enter name of actors"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="genres">
          <Form.Label>genres</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="genres"
            value={genres}
            placeholder="Enter available genres"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>movie year</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="year"
            value={year}
            placeholder="Enter year of movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MovieForm;
