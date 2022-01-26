import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import { CartCheckFill, Cart,Arrow90degLeft } from "react-bootstrap-icons";
import './ProductoIndividual.css'

const ProductoIndivual = () => {
  const [detalle, setDetalle] = useState('');
  const { userLoged, setUserLoged, productos, setProductos } = useContext(TecnoContext);

  const { id } = useParams();
  let nro = id;

  useEffect(()=>{
    const newArray = productos.filter(
        (prod) => parseInt(prod.id) == parseInt(nro))
        setDetalle(newArray)
        console.log(detalle);
  },[])
      

  console.log(detalle);
  console.log(id);
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
          className="card-img-top h-50 w-50 "
          alt="..."
        /></div>
        
        <div className="card-body">
        <h2 className="d-flex justify-content-center texto">${detalle[0].precio}</h2>
          <p className="card-text d-flex justify-content-center p-3 texto">
          {detalle[0].descripcion}
          </p>
          <Link to={'/'}><a className="btn btn-secondary d-flex justify-content-center texto">
            <Arrow90degLeft/> Volver
          </a></Link>
          
        </div>
      </div>
      }
    </div>
  );
};

export default ProductoIndivual;
