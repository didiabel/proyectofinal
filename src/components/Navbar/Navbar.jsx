import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-display-fill fondo"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around letra">
              <li className="nav-item">
                <a className="nav-link" >
                  Notebooks
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Celulares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Tablets
                </a>
              </li>
            </ul>
            <form className=" m-2">
                <div className="d-flex ">
              <input
                className="form-control "
                type="search"
                placeholder="Busquedas"
                aria-label="Search"
              />
              <button className="btn " type="submit">
                <i className="bi bi-search  lupita"></i>
              </button>
              <i className="bi- bi-cart cart-icon carritos"></i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
