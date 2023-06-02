  import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carrusel from './components/Carrusel';
import Banner from './components/Banner';
import Empresas from './components/Empresas';
import Donacion from './components/Donacion';
import Nosotros from './components/Nosotros';
import Valores from './components/Valores';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer';
import Separador from './components/Separador';
import Causas from './components/Causas';


function App() {
  return (
    <div>
      <NavBar/>
      <Carrusel/>
      <Banner/>
      <Empresas/>
      <Donacion/>
      <Nosotros/>
      <Separador/>
      <Valores/>
      <Causas/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
