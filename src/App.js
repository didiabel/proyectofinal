import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Carrito from "./components/Carrito/Carrito";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Registro from "./components/Registro";
import Perfil from "./components/Perfil/Perfil";
import TecnoProvider from "./Store/appContext";
import ProductoIndividual from "./components/ProductoIndividual";
import { Toaster } from "react-hot-toast";
import Notebooks from "./components/tabs/Notebooks";
import Celulares from "./components/tabs/Celulares";
import Tablets from "./components/tabs/Tablets/Tablet";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container-fluid aplicacion">
      <Toaster/>
      <TecnoProvider>
        <Router>
          <Navbar />
            <div className="logitudDeLaPag">
          <Routes>
            <Route path="/proyectofinal/" element={<Home />} />
            <Route path="/proyectofinal/login" element={<Login />} />
            <Route path="/proyectofinal/register" element={<Registro/>} />
            <Route path='/proyectofinal/detalle/:id' element={<ProductoIndividual/>}/>
            <Route path='/proyectofinal/perfil' element={<Perfil/>}/>
            <Route path="/proyectofinal/carrito" element={<Carrito />} />
            <Route path='/proyectofinal/notebooks' element={<Notebooks/>}/>
            <Route path='/proyectofinal/celulares' element={<Celulares/>}/>
            <Route path='/proyectofinal/tablets' element={<Tablets/>}/>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
          </Routes>
            </div>
          <Footer />
        </Router>
      </TecnoProvider>
    </div>
  );
}

export default App;
