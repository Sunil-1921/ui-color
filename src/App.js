import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Colors } from './Components/Content/colors';
import './Sass/body.scss'
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Colors />
      <Footer />
    </>
  );
}

export default App;
