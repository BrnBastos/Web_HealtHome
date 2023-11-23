import './App.css';
import Header from './componentes/header/header';

function App() {
  return (
    <Header/>

    <BrowserRouter>
            <Routes>
              <Route path='/' element={<div><HeaderSemNav /><Login/><Footer /></div>} />
              <Route path='/Home' element={<div><Header /><Home/><Footer /></div>} />
              <Route path='/Login' element={<div><HeaderSemNav /><Login/><Footer /></div>} />
              <Route path='/Cadastro' element={<div><HeaderSemNav /><Cadastro/><Footer /></div>} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
