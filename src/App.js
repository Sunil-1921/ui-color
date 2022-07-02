import './App.css';
import { Header } from './Components/header';
import { Title } from './Components/title';
import { Footer } from './Components/footer';
import { Colors } from './Components/Content/Color/colors';
import './Sass/body.scss'
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Colors />
      <Footer />
    </>
  );
}

export default App;
