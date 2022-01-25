import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/Carrito';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import TecnoProvider from './Store/appContext';

function App() {
  return (
    <div className="container-fluid">
       <TecnoProvider>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element ={<Home/>} />
              <Route path="/carrito" element ={<Carrito/>} />
            </Routes>
            <Footer/>
          </Router>
        </TecnoProvider>
    </div>
  );
}

export default App;
