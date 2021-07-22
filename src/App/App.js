import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BeerPizza from '../components/BeerPizza/BeerPizza';
import BeerSteak from '../components/BeerSteak/BeerSteak';
import Header from '../components/Header/Header';
import BeerDetails from '../components/BeerDetails/BeerDetails';
import Beerlist from '../components/Beerlist/Beerlist';
import  "./App.css";

const App = () => {
    return (
      <BrowserRouter >
        <Header />
        <Switch>
        <main className="mainContainer">
          <Route exact path="/" component={Beerlist}  />
          <Route path="/Beerwithpizza" component={BeerPizza} />
          <Route path="/Beerwithsteak" component={BeerSteak} />
          <Route path="/:id" component={BeerDetails} />
          </main>
        </Switch>
      </BrowserRouter>
    );
  };
export default App;
