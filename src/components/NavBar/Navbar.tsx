export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="#">
                Nostros
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Proyectos Especiales
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Servicios
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Reconocimiento y Aliados
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Donaciones
              </a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link active" aria-current="page" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
