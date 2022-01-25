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

function App() {
  return (
    <div className="container-fluid aplicacion">
      <TecnoProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registro/>} />
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </Router>
      </TecnoProvider>
    </div>
  );
}

export default App;
