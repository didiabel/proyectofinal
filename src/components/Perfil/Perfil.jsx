import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import { Arrow90degLeft } from "react-bootstrap-icons";

const Perfil = () => {
  const { userLoged, compras,setUserLoged,setUserName, setUserPassword, } = useContext(TecnoContext);
  const [precioCompras, setPrecioCompras] = useState(0);

  const cerrarSesion=(e)=>{
    e.preventDefault()
    setUserLoged(false)
    setUserName('')
    setUserPassword('')
  }
  return (
    <div className="container mt-5">
      {userLoged === false ? (
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
      ) : (
        <>
          <div className="card ">
            <div className="d-flex justify-content-center">
              <img
                src={require(`../../img/profile.jpg`)}
                className="card-img-top imagenadmin"
                alt="..."
              />
            </div>
            <div className="card-header ">
              <div className="d-flex justify-content-center texto m-3">
                <h5>{userLoged}</h5>
              </div>
              <div
                className={
                  userLoged === "User: admin@admin.com"
                    ? "d-flex justify-content-center texto m-3"
                    : "d-none"
                }
              >
                <div className="d-flex mt-4">
                  <p>Ingresa al dashboard:</p>
                </div>
                <Link to={"/proyectofinal/admin/dashboard"}>
                  <button className="btn btn-warning m-3">Dashboard</button>
                </Link>
                <Link to={"/proyectofinal/login"}>
                  <button onClick={(e)=>cerrarSesion(e)} className="btn btn-danger m-3">Cerrar Sesion</button>
                </Link>
              </div>
            </div>

            <div className="card-body p-3">
              <h2 className="d-flex justify-content-center texto">
                Tus compras:
              </h2>
              <div
                className="card-text d-flex flex-wrap justify-content-center p-3 texto"
                id="compras"
              >
                {compras.map((comp) => (
                  <div key={comp.id} className="carta m-3 p-2"style={{ width: "16rem" }}>
                    <h4 className="m-1"> Detalle de Compra: </h4>
                    {comp.map((compra) => (
                      <div
                        className="d-flex justify-content-between"
                        key={compra.nombre}
                      >
                        <p className="m-3 text-white">{compra.nombre}:</p>
                        <p className="m-3 ">${compra.precio}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <Link to={"/proyectofinal/"}>
                <p className="btn btn-secondary m-3 d-flex justify-content-center texto">
                  <Arrow90degLeft /> Volver
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Perfil;
