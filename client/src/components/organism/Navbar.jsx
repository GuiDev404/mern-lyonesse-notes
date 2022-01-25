import React from "react";
import { useQueryClient } from "react-query";
import { Link, NavLink, useHistory } from "react-router-dom";
import ToggleTheme from "../molecules/ToggleTheme";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { ENDPOINTS, requestAuth } from "../../services";
import { PAGES } from "../../util";

const Navbar = () => {
  const { setLogin, logoutUser } = useAuth();
  const { email, username } = useUser();

  const { push } = useHistory();
  const queryClient = useQueryClient();

  const logout = () => {
    requestAuth(ENDPOINTS.logout, "post", { email })
      .then((_) => {
        queryClient.clear();
        logoutUser();

        setLogin(null);
        push("/login");
      })
      .catch(console.error);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-color border-bottom border-color">
      <div className="container-fluid mx-4">
        <Link to="/" className="navbar-brand text-color">
          Lyonesse
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {PAGES.map((page) => {
              return (
                <li className="nav-item rounded-0" key={page.label}>
                  <NavLink
                    className="nav-link text-color rounded-0"
                    to={page.url}
                  >
                    {page.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="d-flex">
            {email && (
              <ul className="navbar-nav  rounded-0 me-auto mb-2 mb-lg-0 py-0">
                <li className="nav-item dropdown show">
                  <button
                    className="btn btn-dark rounded-0 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {email}
                  </button>
                  <ul
                    className="dropdown-menu rounded-0 w-100"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-trasparent bg-color-hover"
                        to="/configuracion"
                      >
                        Configuración
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider border-dark" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item bg-trasparent bg-color-hover"
                        onClick={logout}
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            )}

            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
