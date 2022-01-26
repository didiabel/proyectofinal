import { CartCheckFill, Cart, } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import './CardsProductos.css'

const CardsProductos = (props) => {
  const { producto } = props;
  const [statusAgregado, setStatusAgregado] = useState(false);

  const agregado = () => {
    statusAgregado
      ? //si el status es true setear a false
        setStatusAgregado(false)
      : //si el status es false setear a true
        setStatusAgregado(true);
  };
  return (
    <>
      <div className="carta m-4 " style={{ width: "18rem", height: "400px" }}>
        <img
          src={require(`../../img/${producto.nombre}.jpg`)}
          className="card-img-top h-50 imagenes m-3"
        />
        <div className="card-body">
          <h5 className="card-title textos">{producto.nombre}</h5>
          <p className="card-text textos">${producto.precio}</p>
          <div className="d-flex justify-content-around mt-4">
            <Link to={'/detalle/'+producto.id}><button className="btn btn-secondary ">Ver Detalle</button></Link>
            <button
              onClick={() => agregado()}
              className={
                statusAgregado ? "btn btn-success " : "btn btn-outline "
              }
            >
              {statusAgregado ? <CartCheckFill /> : <Cart />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsProductos;
