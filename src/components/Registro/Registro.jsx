import { useContext } from "react";
import { Link } from "react-router-dom";
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
  console.log(users);
  const agregarUsuario = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
  };
  return (
    <div className="container">
      {!userLoged === false ? (
        <div className="d-flex justify-content-around m-5">
          <div>
            <h1>Ya estas Logueado</h1>
            <Link className="d-flex justify-content-around" to={"/"}>
              <button className="btn btn-secondary m-5">Ir al inicio</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="align-items-center   cuerpologin">
          <h1 className="text-center border-bottom m-4 p-4">Register</h1>
          <form className="container align-items-center larger shadow formingreso mb-5 mt-3 p-3">
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                Usuario
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Nunca compartiremos tus datos.
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={(e) => agregarUsuario(e)}
              className="btn btn-secondary boton"
            >
              Registrarse
            </button>
            <div>
              <Link className="mb-1" to={"/login"}>
                <p>Iniciar Sesion</p>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registro;
