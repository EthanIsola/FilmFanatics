import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/search">
          <Search />  
        </Route>
        <Route path = "/login">
          <Login />  
        </Route>
        <Route exact path = "/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
