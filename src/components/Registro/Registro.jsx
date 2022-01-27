import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { TecnoContext } from "../../Store/appContext";

const Registro = () => {
  const {
    userLoged,
    users,
    setUsers,
    userName,
    setUserName,
    userPassword,
    setPassword,
  } = useContext(TecnoContext);

  const newUser = {
    name: userName,
    password: userPassword,
  };
  const[inputs, setInputs] = useState(false)
  const [yaExiste,setYaExiste]=useState(false)
  const completaLosInputs = (e) => {
    e.preventDefault();
    setInputs(true)
  };

  const agregarUsuario = (e) => {
    e.preventDefault();
    setInputs(false)
    const existe = users.find(ele => ele.name== userName)
    if (existe) {
      return(setYaExiste(true))
    }else{
        setUsers([...users, newUser])
        setYaExiste(false)
      }
    
  };
  return (
    <div className="container">
      <Toaster/>
      {!userLoged === false ? (
        <div className="d-flex justify-content-around m-5">
          <div>
            <h1>Ya estas Logueado</h1>
            <Link
              className="d-flex justify-content-around"
              to={"/proyectofinal/"}
            >
              <button className="btn btn-secondary m-5">Ir al inicio</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="align-items-center   cuerpologin">
          <h1 className="text-center border- m-4 p-4">Register</h1>
          <form className="container align-items-center larger shadow formingreso mb-5 mt-3 p-3">
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                Nuevo Usuario
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div id="emailHelp" className={inputs? "text-danger" :"d-none"}>
                 Datos Invalidos
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Nueva Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div id="emailHelp" className={inputs? "text-danger" :"d-none"}>
                Datos Invalidos
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <div className="d-flex justify-content-around">
                <button
                  onClick={userName =='' || userPassword==''? (e) => completaLosInputs(e) : (e)=>agregarUsuario(e)}
                  className="btn btn-secondary boton "
                >
                  Registrarse
                </button>
                </div>
                <div className={yaExiste? "d-flex justify-content-around mt-1" :"d-none"}>
                <h6>Usuario no disponible</h6>
                </div>
                <div className="d-flex justify-content-around">
                  
                  <Link className="mb-1 m-1" to={"/proyectofinal/login"}>
                    <h6>Iniciar Sesion</h6>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registro;
