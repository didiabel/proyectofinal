import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cart } from "react-bootstrap-icons";
import { TecnoContext } from '../../Store/appContext';
import CardsProductos from '../CardsProductos';
import './Carrito.css'


const Carrito = () => {

    const {wishlist, comprar,precioTotal,userLoged} = useContext(TecnoContext)
    

    return (
        <>
        {/* se valida si el usuario esta logueado */}
        {!userLoged?
        <div className="d-flex justify-content-around m-5">
        <div>
          <h1 className="text">No Estas Logueado</h1>
          <Link
            className="d-flex justify-content-around"
            to={"/proyectofinal/login"}
          >
            <button className="btn btn-secondary m-5">Logueate</button>
          </Link>
        </div>
      </div>
        :
        // si esta logueado aparece  la pagina
        <main>
            <div className='container-fluid  carrito'>
                <div className='row d-flex flex-wrap justify-content-around'>  
                <div className=' d-flex flex-wrap justify-content-around'>
                    <div >
                <h1 className={wishlist.length > 0 ? 'text' : 'd-none'}>Total: ${precioTotal}</h1> 
                 <div className=' d-flex flex-wrap justify-content-around'>
                   {/* el boton si lo miramos en el context vacia el wishlist y el precio total */}
                <button onClick={()=> comprar(wishlist, precioTotal)} className={wishlist.length > 0 ? 'btn  botonCards btn-outline-success' : 'd-none'}> <Cart  className="text"/> Comprar</button>
                 </div>
                </div>
                </div>
                {wishlist.length === 0 ? 
                <div className='d-flex justify-content-around'>
                  <div className='d-flex flex-wrap'>
                <h2 className='carrovacio'>No hay productos en tu carrito</h2>
                <i className="bi- bi-cart cart-icon carritos  carrovacio"></i>
                </div>
                </div>
                :
                <>
                {wishlist.map((wish) => (
                        <CardsProductos key={wish.id} producto={{...wish}}  ></CardsProductos>
                ))}
                </>
}
                </div>
            </div>
        </main>
         }
        
        
        </>
     );
}
export default Carrito;