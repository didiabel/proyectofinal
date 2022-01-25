import { CartCheckFill, Cart } from "react-bootstrap-icons";
import { useState } from "react";

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
      <div className="card m-4" style={{ width: "18rem", height: "400px" }}>
        <img
          src={require(`../../img/${producto.nombre}.jpg`)}
          className="card-img-top h-50"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio}</p>
          <div className="d-flex justify-content-around mt-4">
            <button className="btn btn-secondary ">Ver Detalle</button>
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
