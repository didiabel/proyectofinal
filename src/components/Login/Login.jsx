import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import "./Login.css";

const Login = () => {
  const {
    userLoged,
    setUserLoged,
    users,
    userName,
    setUserName,
    userPassword,
    setUserPassword,
  } = useContext(TecnoContext);
  
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const validacion = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (userName == users[i].name && userPassword == users[i].password) {
        setUserLoged(`User: ${users[i].name}`);
        setError(false)
        navigate("/proyectofinal/"); //ReactRuterdom useNavigate
      } else {
        setError(true);
      }
    }
  };
  return (
    <div className="align-items-center cuerpologin">
      <h1 className="text-center m-4 p-4">Login</h1>
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
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-around">
        <button
          onClick={(e) => validacion(e)}
          className="btn btn-secondary boton"
        >
          Ingresar
        </button>
        </div>
        <h6 className={error ? "text-danger" : "d-none"}>
          Credenciales incorrectas
        </h6>
        <div className="d-flex">
          <p className="m-1">No tenes usuario? </p>
          <Link className="m-1" to={"/proyectofinal/register"}>
            <p> Registrarse</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
