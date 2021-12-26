import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header.component";
import AddMovie from "./AddMovie.component";
import MoviesList from "./MoviesList.component";
import useLocalStorage from "./useLocalStorage";
import EditMovie from "./EditMovie.component";
import { Redirect } from 'react-router'


const AppRouter = () => {
  const [movies, setMovies] = useLocalStorage("movies", []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <MoviesList {...props} movies={movies} setMovies={setMovies} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddMovie {...props} movies={movies} setMovies={setMovies} />
              )}
              path="/add"
            />

            <Route
              render={(props) => (
                <EditMovie {...props} movies={movies} setMovies={setMovies}/>
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
