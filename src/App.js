import React from "react";
import { Toaster } from "react-hot-toast";

import { Header, Title, Footer, Colors } from "./Components";
import "./Sass/index.scss";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Title />
      <Colors />
      <Footer />
    </>
  );
}

export default App;
