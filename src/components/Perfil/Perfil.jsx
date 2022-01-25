import { useContext } from "react";
import { Link } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";

const Perfil = () => {
    const {userLoged, setUserLoged, users } = useContext(TecnoContext)
console.log(userLoged);
    return ( 
        <div className="container mt-5">
            
      {userLoged === false ? 
      <div className="d-flex justify-content-around m-5">
      <div>
        <h1>No Estas Logueado</h1>
        <Link className="d-flex justify-content-around" to={"/login"}>
          <button className="btn btn-secondary m-5">Logueate</button>
        </Link>
      </div>
    </div>
      :
      <h1>{userLoged}</h1>
       }
        </div>
     );
}
 
export default Perfil;