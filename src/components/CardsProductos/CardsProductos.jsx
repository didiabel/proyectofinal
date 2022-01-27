import { Cart } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import "./CardsProductos.css";
import { useContext } from "react";
import { TecnoContext } from "../../Store/appContext";

const CardsProductos = (props) => {

  const { producto } = props;

  const{addProduct, deleteCarrito, deleteAdmin}=useContext(TecnoContext)
  
  let location = useLocation()
    

  return (
    <>
      <div className="carta m-4 shadow-lg" style={{ width: "16rem", height: "400px" }}>
        <img
          src={require(`../../img/${producto.nombre}.jpg`)}
          className="card-img-top h-50 imagenes m-3"
        />
        <div className="card-body">
          <h5 className="card-title textos">{producto.nombre}</h5>
          <p className="card-text textos">${producto.precio}</p>
          <div className="d-flex justify-content-around mt-4">
            <Link to={"/proyectofinal/detalle/" + producto.id}>
              <button className="btn botonCards"><p>Ver Detalle</p></button>
            </Link>
             {location.pathname === '/proyectofinal/' || location.pathname === '/proyectofinal/notebooks' || location.pathname === '/proyectofinal/celulares' || location.pathname === '/proyectofinal/tablets' ?
           <button onClick={() => addProduct({...producto}, producto.precio)}
           className= "btn"><Cart className="text iconoCards" />
            </button>
            : location.pathname === "/proyectofinal/carrito"? 
            <button className="btn" onClick={() => deleteCarrito(producto.id, producto.precio)}> <i className="bi bi-trash2 text iconoCards"></i></button>
            :<button className="btn" onClick={() => deleteAdmin(producto.id) }> <i className="bi bi-trash2 iconoCards"></i></button>
        }
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsProductos;
