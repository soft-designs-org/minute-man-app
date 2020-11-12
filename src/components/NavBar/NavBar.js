//Imports
import React from "react";
import { loginSuccess, logout } from "../../redux/actions/index";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap/";
import { useSelector, useDispatch } from "react-redux"; //Remove useDispatch
//Includes

const NavBar = () => {
  //Holds the current state of the user (logged in or logged out)
  const isLogged = useSelector((state) => state.isLoggedIn);

  //Remove the following line
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
      {/*Logo Placement*/}
      <NavLink className="navbar-brand" to="/">
        <span>Minute Man</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#NavBar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/*Navigation Links*/}
      <div className="collapse navbar-collapse" id="NavBar">
        <ul className="navbar-nav ml-auto">
          {isLogged && (
            <li>
              <span className="nav-link">Hello, User </span>
            </li>
          )}
          <li className="nav-item">
            <Nav.Link
              as={NavLink}
              className="nav-link"
              to="/home"
              activeClassName="active-link"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <span className="fa fa-home fa-sm"></span> Home
            </Nav.Link>
          </li>
          <li className="nav-item ml-md-3">
            <Nav.Link
              as={NavLink}
              className="nav-link"
              to="/services"
              activeClassName="active"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <span className="fa fa-list-ul fa-sm"></span> Services
            </Nav.Link>
          </li>
          {isLogged && (
            <>
              <li className="nav-item ml-md-3">
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/profile"
                  activeClassName="active-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <span className="fa fa-user fa-sm"></span> Profile
                </Nav.Link>
              </li>
              {/* Remove onClick */}
              <li
                className="nav-item ml-md-3"
                onClick={() => dispatch(logout())}
              >
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/login"
                  activeClassName="active-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <span className="fa fa-sign-out-alt fa-sm"></span> Logout
                </Nav.Link>
              </li>
            </>
          )}
          {!isLogged && (
            <>
              <li className="nav-item ml-md-3">
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/signup"
                  activeClassName="active-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <span className="fa fa-user-plus fa-sm"></span> Signup
                </Nav.Link>
              </li>
              <li
                className="nav-item ml-md-3"
                onClick={() => dispatch(loginSuccess())}
              >
                {/* Remove onClick */}
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/login"
                  activeClassName="active-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <span className="fa fa-sign-in-alt fa-sm"></span> Login
                </Nav.Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
