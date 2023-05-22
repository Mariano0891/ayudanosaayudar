  import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Empresas from './components/Empresas';
import Donacion from './components/Donacion';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Empresas/>
      <Donacion/>
    </div>
  );
}

export default App;
