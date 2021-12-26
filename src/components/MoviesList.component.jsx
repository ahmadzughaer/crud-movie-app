import React from 'react';
import _ from 'lodash';
import Movie from './Movie.component';
const MoviesList = ({movies, setMovies}) => {
    const handleRemoveMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
      };
    
      return (
        <React.Fragment>
          <div className="movies-list">
            {!_.isEmpty(movies) ? (
              movies.map((movie) => (
                <Movie key={movie.id} {...movie} handleRemoveMovie={handleRemoveMovie} />
              ))
            ) : (
              <p className="message">No movies available. Please add some movies.</p>
            )}
          </div>
        </React.Fragment>
      );
};

export default MoviesList;