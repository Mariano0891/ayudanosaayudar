  import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Empresas from './components/Empresas';
import Donacion from './components/Donacion';
import Nosotros from './components/Nosotros';
import Valores from './components/Valores';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Empresas/>
      <Donacion/>
      <Nosotros/>
      <Valores/>
    </div>
  );
}

export default App;
