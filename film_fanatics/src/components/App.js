import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Search from "./Search";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";

function App() {
  const [selectedMovie, selectMovie] = useState([])
  const [selected, setSelect] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/movies")
    .then(r=>r.json())
    .then(data=> setMovies(data))
  },[])

  useEffect(()=>{
     selectMovie(movies.filter((movie)=>{
      return movie.title === selected
    }))
  }, [selected])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/moviePage">
          <MoviePage movie = {selectedMovie[0]}/>  
        </Route>
        <Route path = "/search">
          <Search />  
        </Route>
        <Route path = "/login">
          <Login />  
        </Route>
        <Route exact path = "/">
          <MovieList setSelect = { setSelect } movies = {movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
