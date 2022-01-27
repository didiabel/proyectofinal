import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { TecnoContext } from "../../Store/appContext";

const Navbar = () => {
  const {
    userLoged,
    setUserLoged,
    productos,
    setProductos,
    search,
    setSearch,
    wishlist,
    setWishlist,
  } = useContext(TecnoContext);

  const preventDefault = (e) => {
    e.preventDefault();
  };
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-md color">
        <div className="container-fluid">
          <Link to={"/proyectofinal/"} className="navbar-brand" href="#">
            <i className="bi bi-display-fill fondo"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list navbar-toggler-icon text"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around mt-3 letra">
              <Link
                style={{ textDecoration: "none" }}
                to={"/proyectofinal/notebooks"}
              >
                <li className="nav-item">
                  <p className="nav-link">Notebooks</p>
                </li>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/proyectofinal/celulares"}
              >
                <li className="nav-item dropdown">
                  <p className="nav-link">Celulares</p>
                </li>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/proyectofinal/tablets"}
              >
                <li className="nav-item">
                  <p className="nav-link">Tablets</p>
                </li>
              </Link>
            </ul>
            <form className=" m-2">
              <div className="d-flex">
                <div
                  className={
                    location.pathname === "/proyectofinal" ||
                    location.pathname === "/proyectofinal/" ||
                    location.pathname === "/proyectofinal/notebooks" ||
                    location.pathname === "/proyectofinal/celulares" ||
                    location.pathname === "/proyectofinal/tablets"
                      ? "d-flex"
                      : "d-none"
                  }
                >
                  <input
                    className="form-control "
                    type="search"
                    placeholder="Busquedas"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    className="btn "
                    onClick={(e) => preventDefault(e)}
                    type="submit"
                  >
                    <i className="bi bi-search  lupita"></i>
                  </button>
                </div>
                <h5 className="text ml-4">{wishlist.length}</h5>
                <Link to={"/proyectofinal/carrito"}>
                  <i className="bi- bi-cart cart-icon carritos"></i>
                </Link>
                <Link to={"/proyectofinal/perfil"}>
                  <i className="bi- bi-person-fill carritos"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
