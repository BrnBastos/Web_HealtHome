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
import { AuthProvider } from './componentes/AuthContext.js';
import Footer from './componentes/footer/footer.js'
import styled from 'styled-components';

const DivSpace = styled.div` 
        width: 100%;
        height: 150px;
    `

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<div><HeaderW/><DivSpace/><Login/><DivSpace/><DivSpace/><Footer/></div>} />
            <Route path='/Home' element={<div><Header/><Home/><Footer/></div>} />
            <Route path='/Login' element={<div><HeaderW/><DivSpace/><Login/><DivSpace/><DivSpace/><Footer/></div>} />
            <Route path='/Cadastro' element={<div><HeaderW/><DivSpace/><Cadastrar/><DivSpace/><DivSpace/><Footer/></div>} />
            <Route path='/Habitos' element={<div><Header/><Habitos/><Footer/></div>} />
            <Route path='/QuemSomos' element={<div><Header/><QuemSomos/><Footer/></div>} />
            <Route path='/Rotina' element={<div><Header/><Rotina/><Footer/></div>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;