import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Colors } from './Components/Content/colors';
import './Sass/body.scss'
import React from "react";

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
