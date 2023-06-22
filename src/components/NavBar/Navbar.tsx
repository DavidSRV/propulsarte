import logo from "../../assets/img/Horizontal Logo.png";

          //TERMNAR Y ORGANIZAR LINKS ENRUTADORES


export const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="LogoPropulsarte" width="100%" height="50" />
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Proyectos Especiales
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Gestión en Proyectos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gestion Ecosostenible
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gestion Ambiental
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Gestion en Recursos Humanos RRHH
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Gestion Laboral Persona Natural
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Gestion Educativa Empresarial
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Gestion en SGSST
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Reconocimientos y Aliados
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Donaciones
              </a>
            </li>

            <li className="nav-item">
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
