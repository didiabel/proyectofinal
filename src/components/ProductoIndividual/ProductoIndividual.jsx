import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import { Cart,Arrow90degLeft } from "react-bootstrap-icons";
import './ProductoIndividual.css'

const ProductoIndivual = () => {
  const [detalle, setDetalle] = useState('');
  const { productos, addProduct, deleteCarrito } = useContext(TecnoContext);

  const { id } = useParams();
  let nro = id;

  useEffect(()=>{
    const newArray = productos.filter(
        (prod) => parseInt(prod.id) == parseInt(nro))
        setDetalle(newArray)
  },[])
      
  let location = useLocation()
  return (
    <div>
    {detalle === ''?
    'cargando'
    :
      <div  className="card ">
        <h5 className="card-header d-flex justify-content-center texto">{detalle[0].nombre}</h5>
        <div className="d-flex justify-content-center">
            <img
          src={require(`../../img/${detalle[0].nombre}.jpg`)}
          className="card-img-top imagenesProductoIndividual"
          alt="..."
        /></div>
        
        <div className="card-body">
          <h2 className="d-flex justify-content-center texto">${detalle[0].precio}</h2>
        <div className="d-flex justify-content-around mt-4">
        {location.pathname === '/proyectofinal/' || location.pathname === '/proyectofinal/notebooks' || location.pathname === '/proyectofinal/celulares' || location.pathname === '/proyectofinal/tablets' || location.pathname === `/proyectofinal/detalle/${nro}` ?
           <button onClick={() => addProduct({...detalle[0]}, detalle[0].precio)}
           className= 'btn btn-outline-success'>
             <p className="iconoCards mt-3">Agregar al Carrito <Cart  /></p>
            </button>
            :
            <button className='btn' onClick={() =>deleteCarrito(detalle[0].id,detalle[0].precio) }> <i class='bi bi-trash2 text'></i></button>}
          </div>
          <p className="card-text d-flex justify-content-center p-3 texto">
          {detalle[0].descripcion}
          </p>
          <Link to={'/proyectofinal/'}><p className="btn btn-secondary d-flex justify-content-center texto">
            <Arrow90degLeft/> Volver
          </p></Link>
          
        </div>
      </div>
      }
    </div>
  );
};

export default ProductoIndivual;
