import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import CardsProductos from "../CardsProductos/CardsProductos";
import "./Home.css";

const Home = () => {
  const { productos, setProductos, userLoged, search, setSearch } = useContext(TecnoContext);

  return (
    <div className="conatiner">
      <Toaster/>
        <div>
          <h2 className="text-center text m-3">Bienvenido a TecnoGreen</h2>
          <div className="d-flex flex-wrap justify-content-between">
            {productos.filter(val=>{
                if(search==''){
                    return productos
                }else if (val.nombre.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((producto) => (
              <CardsProductos key={producto.id} producto={{ ...producto }} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Home;
