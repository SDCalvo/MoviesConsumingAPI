import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contacto from './Components/Contacto/Contacto';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import Movie from './Components/Movie/Movie';


function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/movies" exact>
            <SearchMovie/>
          </Route>
          <Route path="/movies/:id">
            <Movie/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path='*'>
            <div className="container my-5">
              <div className="row text-center">
                <div className="col-md-12">
                  <h1>Página no encontrada</h1>
                  <p>Por favor, inténtelo de nuevo.</p>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
