import './App.css';
import Header from './componentes/header/header.js';
import HeaderW from './componentes/header/headerWnav.js';
import Login from './componentes/cadastro/login.js';
import Cadastrar from "./componentes/cadastro/cadastrar.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><HeaderW/><Login/></div>} />
          <Route path='/Home' element={<div><Header/></div>} />
          <Route path='/Login' element={<div><HeaderW/><Login/></div>} />
          <Route path='/Cadastro' element={<div><HeaderW/><Cadastrar/></div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
