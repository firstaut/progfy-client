import React, { useContext, useEffect } from "react";
import UserAuthContext from "../../contexts/authenticate/UserAuthContext";
//import progfyImg from '../../assets/img/progfy.png';
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import progfyLogo from "../../assets/img/progfy.png";

const LandingHeader = () => {
  const { customer, closeSession, getUserAuthenticated } = useContext(
    UserAuthContext
  );

  const handleCloseSession = () => {
    closeSession();
  };

  useEffect(() => {
    getUserAuthenticated();
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom">
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={progfyLogo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="nav-link">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Equipos
            </Nav.Link>
            <Nav.Link href="https://cursos.progfy.com" className="nav-link">
              Cursos
            </Nav.Link>
          </Nav>
          <div
            style={{ color: "white" }}
            className="ml-auto buttons"
            href="/login"
          >
            {customer && customer.kind === "admin" ? (
              <Link href="/admin">
                <button className="btn-custom mr-2">Panel de control</button>
              </Link>
            ) : null}
            {customer ? (
              <Link href="/dashboard/crear">
                <button className="btn-custom">Ir al Dashboard</button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="btn-custom">Iniciar Sesión</button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
    //   <div className="p-0">
    //     <img style={{ width: "15rem", height: "auto" }} src={""} alt="" />
    //     <label className="text-center text-white p-2 text-uppercase ml-4"></label>
    //   </div>

    // <div className="" id="navbarSupportedContent">
    //   {customer && customer.kind === "admin" ? (
    //     <Link href="/admin">
    //       <a
    //         style={{ width: "12rem" }}
    //         className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text"
    //       >
    //         PANEL DE CONTROL
    //       </a>
    //     </Link>
    //   ) : null}
    //   {customer ? (
    //     <Link href="/dashboard/crear">
    //       <a
    //         style={{ width: "12rem" }}
    //         className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text"
    //       >
    //         IR AL DASHBOARD
    //       </a>
    //     </Link>
    //   ) : (
    //     <Link href="/login">
    //       <a
    //         style={{ width: "12rem" }}
    //         className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text"
    //       >
    //         INICIAR SESIÓN
    //       </a>
    //     </Link>
    //   )}
    // </div>
    // </nav>
  );
};

export default LandingHeader;
