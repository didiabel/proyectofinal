import { useContext } from "react";
import { Link } from "react-router-dom";
import { TecnoContext } from "../../Store/appContext";
import { CartCheckFill, Cart, Arrow90degLeft } from "react-bootstrap-icons";

const Perfil = () => {
  const { userLoged, setUserLoged, users, compras } = useContext(TecnoContext);
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
              <div className={userLoged === 'User: admin@admin.com'? 'd-flex justify-content-center texto m-3' :'d-none'}>
                  <div className="d-flex mt-4">
                      <p>Ingresa al dashboard:</p>
                  </div>
              <Link to={'/admin/dashboard'}><button className="btn btn-warning m-3">Dashboard</button></Link>
              
              </div>
            </div>

            <div className="card-body">
              <h2 className="d-flex justify-content-center texto">Tus compras:</h2>
              <div className="card-text d-flex justify-content-center p-3 texto">
                  
                {compras.map((comp) => (
                  <div className="border m-3">
                    <h4 className="m-1">Compra:</h4>
                    {comp.map((compra) => (
                      <div className="d-flex justify-content-between" key={compra.nombre}>
                        <p className="m-3 text-white">{compra.nombre}:</p>
                        <p className="m-3 ">${compra.precio}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <Link to={"/proyectofinal/"}>
                <a className="btn btn-secondary m-3 d-flex justify-content-center texto">
                  <Arrow90degLeft /> Volver
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Perfil;
