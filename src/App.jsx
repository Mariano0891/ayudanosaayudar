  import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carrusel from './components/Carrusel';
import Banner from './components/Banner';
import Empresas from './components/Empresas';
import Donacion from './components/Donacion';
import Valores from './components/Valores';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <Carrusel/>
      <Banner/>
      <Empresas/>
      <Donacion/>
      <Nosotros/>
      <Valores/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
