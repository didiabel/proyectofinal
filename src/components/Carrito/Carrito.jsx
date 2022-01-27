import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from "react-bootstrap-icons";

import { useEffect, useState } from 'react/cjs/react.development';
import { TecnoContext } from '../../Store/appContext';
import CardsProductos from '../CardsProductos';
import './Carrito.css'


const Carrito = () => {
    const {wishlist, setWishlist, comprar,precioTotal, setPrecioTotal,userLoged,noHayProductos,setNoHayProductos} = useContext(TecnoContext)
    


    return (
        <>
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
        <main>
            <div className='container-fluid  carrito'>
                <div className='row d-flex flex-wrap justify-content-around'>  
                <div className=' d-flex flex-wrap justify-content-around'>
                    <div >
                <h1 className={wishlist.length > 0 ? 'text' : 'd-none'}>Total: ${precioTotal}</h1> 
                 <div className=' d-flex flex-wrap justify-content-around'>
                <button onClick={()=> comprar(wishlist)} className={wishlist.length > 0 ? 'btn  botonCards btn-outline-success' : 'd-none'}> <Cart  className="text"/> Comprar</button>
                 </div>
                </div>
                </div>
                {wishlist.length === 0 ? <h2 className='text-center mt-5 mb-5 carrovacio'>No hay productos</h2>
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