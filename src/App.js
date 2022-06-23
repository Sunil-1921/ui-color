import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Colors } from './Components/Content/colors';
import './Sass/body.scss'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Colors />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
