import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import CardsProductos from "../CardsProductos/CardsProductos";
import "./Home.css";

const Home = () => {
  const { productos, setProductos, userLoged } = useContext(TecnoContext);

  return (
    <div className="conatiner">
      {userLoged === false ? (
        <div className="d-flex justify-content-around m-5">
          <div>
            <h1>No Estas Logueado</h1>
            <Link className="d-flex justify-content-around" to={"/login"}>
              <button className="btn btn-secondary m-5">Logueate</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center">Bienvenido a nuestra pagina</h2>
          <div className="d-flex flex-wrap justify-content-between">
            {productos.map((producto) => (
              <CardsProductos key={producto.id} producto={{ ...producto }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
