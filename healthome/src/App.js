import './App.css';
import Header from './componentes/header/header.js';
import HeaderW from './componentes/header/headerWnav.js';
import Login from './componentes/cadastro/login.js';
import Cadastrar from "./componentes/cadastro/cadastrar.js";
import Home from './componentes/telas/home.js';
import Habitos from './componentes/telas/habitos.js';
import Rotina from './componentes/telas/rotina.js';
import QuemSomos from './componentes/telas/somos.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><HeaderW/><Login/></div>} />
          <Route path='/Home' element={<div><Header/><Home/></div>} />
          <Route path='/Login' element={<div><HeaderW/><Login/></div>} />
          <Route path='/Cadastro' element={<div><HeaderW/><Cadastrar/></div>} />
          <Route path='/Habitos' element={<div><Header/><Habitos/></div>} />
          <Route path='/QuemSomos' element={<div><Header/><QuemSomos/></div>} />
          <Route path='/Rotina' element={<div><Header/><Rotina/></div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;