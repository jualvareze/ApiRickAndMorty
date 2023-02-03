import './App.css';
import Header from './components/Header';
import MiApi from './components/MiApi';
import { useState } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="App contenedor">
      <Header className="header" filtrar={setBusqueda}></Header>
      <MiApi busqueda={busqueda} ></MiApi>
    </div>
  );
}

export default App;
