import React, { useState, useContext } from "react";
import UserAuthContext from "../../contexts/authenticate/UserAuthContext";
import ScheduleContext from "../../contexts/schedules/ScheduleContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DownloadProgfyDoc from "../documentation/DownloadProgfyDoc";

const ContainerModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const Header = () => {
  const {
    customer,
    credits,
    consumed,
    closeSession,
    getUserAuthenticated,
  } = useContext(UserAuthContext);
  const { schedules, lstSchedulesByCustomer } = useContext(ScheduleContext);

  const router = useRouter();

  const assigned =
    schedules.filter((sch) => sch.status === "activo").length || 0;

  const nameComplete = customer
    ? customer.names + " " + customer.lastnames
    : "";

  const handleCloseSession = () => {
    localStorage.setItem("dashboard", false);
    closeSession();
  };

  const handleGoToLandingPage = () => {
    localStorage.setItem("dashboard", false);
    router.push("/");
  };

  const handleChooseOption = (xoption) => {
    router.push(`/dashboard/${xoption}`);
  };

  const pasos = localStorage.getItem("pasos");

  const option = router.pathname.split("/")[2];

  const [options, setOptions] = useState(["crear", "horarios"]);

  const [available, setAvailable] = useState(false);

  useEffect(() => {
    lstSchedulesByCustomer();

    if (pasos && pasos.trim() === "true") {
      setAvailable(true);
    }

    localStorage.setItem("dashboard", true);
  }, []);

  const BtnOption = styled.button`
    width: 100%;
    padding: 0px;
    outline: none !important;
    outline-color: transparent;
    border: none !important;
  `;

  return (
    <Navbar expand="lg" className="bg-dark">
      <div className="container-fluid">
        <Navbar.Brand>
          <p className="text-white p-2">Bienvenido: {nameComplete}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="list-group p-2 mt-2 nav-none">
            <li
              className={`list-group mt-2 ${option === options[0] ? "" : ""}`}
            >
              <BtnOption
                className="mt-2 btn-custom-2"
                onClick={() => handleChooseOption(options[0])}
              >
                Crear horario
              </BtnOption>
            </li>
            <li
              className={`list-group mt-2 ${option === options[1] ? "" : ""}`}
            >
              <BtnOption
                className="btn-custom-2"
                onClick={() => handleChooseOption(options[1])}
              >
                Mis horarios
              </BtnOption>
            </li>
            <li className={`list-group mt-2`}>
              <a
                className="btn-custom-2 text-center"
                href="http://3.227.226.102/Progfy-desktop.rar"
                download="Progfy-install.zip"
              >
                Instalador Progfy
              </a>
            </li>

            <li className={`list-group mt-2 text-center bg-dark`}>
              <BtnOption
                onClick={() => setAvailable(!available)}
                type="button"
                className="btn-custom-2 btn-warning"
              >
                Instrucciones de uso
              </BtnOption>
            </li>
          </ul>
          <div className="ml-auto buttons">
            <button
              onClick={handleGoToLandingPage}
              type="button"
              className="btn btn-outline-info mr-2"
            >
              Ir al inicio
            </button>

            <a
              type="button"
              onClick={handleCloseSession}
              href="/"
              className="btn btn-info"
            >
              Cerrar Sesión
            </a>
          </div>
        </Navbar.Collapse>
      </div>
      <div className="col-sm-12 col-lg-10 p-3 modal-nav">
        {available ? (
          <ContainerModal>
            <DownloadProgfyDoc setClose={setAvailable} />
          </ContainerModal>
        ) : null}
        {"" || null}
      </div>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    //     <div className="p-0">
    //         <p className="text-white p-2">Bienvenido: {nameComplete}</p>
    //     </div>

    //     <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    //         <div className="row col-sm-8 justify-content-end">
    //             <label className="alert alert-light mr-2">Horas disponibles: {credits}h</label>
    //             <label className="alert alert-light mr-2">Horas asignadas: {assigned}h</label>
    //             <label className="alert alert-light mr-2">Horas consumidos: {consumed}h</label>
    //         </div>

    //         <div>
    //             <button onClick={handleGoToLandingPage} type="button" className="btn btn-outline-info mr-2">Ir al inicio</button>

    //             <button
    //                 type="button"
    //                 onClick={handleCloseSession}
    //                 className="btn btn-info"
    //             >Cerrar Sesión</button>
    //         </div>
    //     </div>
    // </nav>
  );
};

export default Header;
