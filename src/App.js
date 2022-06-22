import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Colors } from './Components/Content/colors';
import './Sass/body.scss'

function App() {
  return (
    <>
      <Header />
      <Colors key={"i"} />
      <Footer />
    </>
  );
}

export default App;
