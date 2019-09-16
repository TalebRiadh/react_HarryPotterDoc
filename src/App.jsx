import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './component/MovieDetails'
import './App.css';
import Movies from './component/Movies';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div >

  );
}

export default App;