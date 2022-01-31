import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TecnoContext } from "../../Store/appContext";

const Registro = () => {
  const {
    userLoged,
    users,
    setUsers,
    userName,
    setUserName,
    userPassword,
    setUserPassword,
  } = useContext(TecnoContext);

  const newUser = {
    name: userName,
    password: userPassword,
  };

  const [repeatedPassword, setRepeatedPassword] = useState("");

  //para el error de que los datos estan vacios
  const [inputs, setInputs] = useState(false);
  //para error que el user ya existe
  const [yaExiste, setYaExiste] = useState(false);
  //para aprobacion de registro
  const [registroAprobado, setRegistroAprobado] = useState(false);
  //las contraseñas no coinciden
  const [contraseñaError, setContraseñaError] = useState(false);

  //para el error de que los datos estan vacios
  const completaLosInputs = (e) => {
    e.preventDefault();
    setRegistroAprobado(false);
    setYaExiste(false);
    setInputs(true);
  };

  const agregarUsuario = (e) => {
    e.preventDefault();
    setInputs(false);
    const existe = users.find((ele) => ele.name == userName);

    if (existe) {
      setRegistroAprobado(false);
      setContraseñaError(false);
      setYaExiste(true);
    } else if (userPassword !== repeatedPassword) {
      setInputs(false);
      setYaExiste(false);
      setRegistroAprobado(false);
      setContraseñaError(true);
    } else {
      setUsers([...users, newUser]);
      setYaExiste(false);
      setContraseñaError(false);
      setRegistroAprobado(true);
      toast.success(`Usuario Registrado: ${userName} `);
    }
  };
  return (
    <div className="container">
      <Toaster />
      <div className="align-items-center   cuerpologin">
        <h1 className="text-center border- m-4 p-4">Register</h1>
        <form className="container align-items-center larger shadow formingreso mb-5 mt-3 p-3">
          <div className="mb-3 ">
            <div className="mb-3 ">
              <div
                id="emailHelp"
                className={
                  contraseñaError
                    ? "text-white border bg-danger rounded d-flex justify-content-around mt-1"
                    : "d-none"
                }
              >
               <p className="text-white m-2">Error: Las Contraseñas no coinciden</p> 
              </div>
              <div
                id="emailHelp"
                className={
                  inputs
                    ? "text-white border bg-danger rounded d-flex justify-content-around mt-1"
                    : "d-none"
                }
              >
               <h6 className="text-white m-2"> Error: Datos Invalidos</h6>
              </div>
              <div
                className={
                  yaExiste ? "text-white border bg-danger rounded d-flex justify-content-around mt-1" : "d-none"
                }
              >
                <h6 className="text-white m-2" >Error: Usuario no disponible</h6>
              </div>
              <div
                className={
                  registroAprobado
                    ? " border bg-success rounded d-flex justify-content-around mt-1"
                    : "d-none"
                }
              >
                <h6 className="text-white m-2">Usuario registrado</h6>
              </div>
            </div>
            <label htmlFor="exampleInputEmail1" className="form-label mt-2">
              Nuevo Usuario
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Usuario"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Nueva Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            className=""
          >
            Repetir Nueva Contraseña
          </label>
          <div className="mb-3 ">
            <input
              type="password"
              className="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <div className="d-flex justify-content-around">
                <button
                  onClick={
                    userName == "" ||
                    userPassword == "" ||
                    repeatedPassword == ""
                      ? (e) => completaLosInputs(e)
                      : (e) => agregarUsuario(e)
                  }
                  className="btn btn-secondary boton "
                >
                  Registrarse
                </button>
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
      )
    </div>
  );
};

export default Registro;
