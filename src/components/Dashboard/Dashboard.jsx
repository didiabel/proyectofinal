import "./Dashboard.css";
import { useContext, useState } from "react";
import { TecnoContext } from "../../Store/appContext";
import { Link } from "react-router-dom";
import CardsProductos from "../CardsProductos";
// import Userslist from '../Userslist';
import toast, { Toaster } from "react-hot-toast";
// import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const {
    productos,
    setProductos,
    setUsers,
    users,
    userLoged,
    agregarProductosAdmin,
    deleteUser,
    newid,
    setNewid,
    newnombre,
    setNewnombre,
    newtipo,
    setNewtipo,
    newprecio,
    setNewprecio,
    newdescripcion,
    setNewdescripcion,
  } = useContext(TecnoContext);

  return (
    <div>
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
          <Toaster />
          <nav
            className="navbar navbar-expand-md navbar-light bg-secondary"
            id="home"
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home"
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#addproducts">
                      Agregar Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#delproducts">
                      Eliminar productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#delusers">
                      Eliminar usuarios
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row d-flex justify-content-center pb-5">
            <h3 className="text-center p-2 mt-3 text carta">Admin Workspace</h3>
            <div className="col-12 d-flex justify-content-center">
              <img
                src={require(`../../img/profile.jpg`)}
                className="card-img-top imagenadmin"
                alt="admin"
              />
            </div>
            <div className="col-12 justify-content-center formuprod">
              <h4 className="text-center pt-4 pb-4 text carta" id="addproducts">
                Agregar productos
              </h4>
              <form onSubmit={agregarProductosAdmin}>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Id{" "}
                  </span>
                  <input
                    type="number"
                    value={newid}
                    onChange={(e) => setNewid(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Nombre{" "}
                  </span>
                  <input
                    type="text"
                    value={newnombre}
                    onChange={(e) => setNewnombre(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Tipo{" "}
                  </span>
                  <input
                    type="text"
                    value={newtipo}
                    onChange={(e) => setNewtipo(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Precio{" "}
                  </span>
                  <input
                    type="number"
                    value={newprecio}
                    onChange={(e) => setNewprecio(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Descripción{" "}
                  </span>
                  <input
                    type="text"
                    value={newdescripcion}
                    onChange={(e) => setNewdescripcion(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary mt-2 iconoCards"
                >
                  Agregar
                </button>
              </form>
              <a className="nav-link text-center text" href="#home">
                Volver Arriba
              </a>

              <h4 className="text-center pt-4 pb-4 text carta" id="delproducts">
                Eliminar productos
              </h4>

              <div className="d-flex flex-wrap justify-content-around">
                {productos.map((producto) => (
                  <CardsProductos
                    key={producto.id}
                    producto={{ ...producto }}
                  />
                ))}
              </div>
              <a className="nav-link text-center" href="#home">
                Volver Arriba
              </a>

              <h4 className="text-center pt-4 pb-4 carta text" id="delusers">
                Eliminar usuarios
              </h4>
              <div className="d-flex flex-wrap justify-content-center">
                {users.length > 0 ? (
                  users.map((user) => (
                    <div className="d-flex carta p-3 m-3 justify-content-around">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item carta "><p className="text">{user.name}</p></li>
                        <li className="list-group-item carta "><p className="text">*****</p></li>
                      </ul>
                      <button
                        className="btn"
                        onClick={() => deleteUser(user.name)}
                      >
                        {" "}
                        <i className="bi bi-trash2 iconoCards"></i>
                      </button>
                    </div>
                  ))
                ) : (
                  <h5 className="text-center pt-4 pb-4 text" id="delusers">
                    No hay usuarios para eliminar
                  </h5>
                )}
              </div>

              <a className="nav-link text-center text" href="#home">
                Volver Arriba
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
