import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import React, { Fragment, useContext, useEffect } from "react";
import LandingHeader from "../src/components/home/LandingHeader";
import UserAuthContext from "../src/contexts/authenticate/UserAuthContext";
import Link from "next/link";
import Layout from "../src/components/layouts/Layout";
import progfyIcon from "../src/assets/img/logo2.jpeg";
import homeIcon from "../src/assets/img/home.svg";
import cloudIcon from "../src/assets/img/cloud.png";

const ContentHome = styled.div`
  height: 100vh;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(208, 208, 255, 1) 0%,
    rgba(244, 253, 255, 1) 100%
  );

  .franja_negra {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default function Home() {
  const { customer, getUserAuthenticated } = useContext(UserAuthContext);

  // useEffect(() => {
  //   //getUserAuthenticated();

  //   const dashboard = localStorage.getItem('dashboard');

  //   if(dashboard) {
  //     if(dashboard === 'true' && customer) {

  //     } else {

  //     }
  //   }

  // }, []);

  return (
    <Layout>
      <LandingHeader />

      <ContentHome className="py-5 mb-5">
        <div className="container grid-container">
          <div class="sc-1knjrp2-0 kvhru9-1 hQTiJW jwymsC">
            <div class="sc-1knjrp2-0 sc-1j1ze6p-0 hQTiJW desktop-size">
              <div class="sc-1knjrp2-0 sc-1j1ze6p-1 hQTiJW rounded-line"></div>
              <div class="sc-1knjrp2-0 sc-1j1ze6p-2 jdaYZB desktop-background">
                <div>
                  <div class="sc-1knjrp2-0 sc-1j1ze6p-3 hQTiJW svg-logo">
                    <div class="sc-1knjrp2-0 sc-1j1ze6p-4 hQTiJW icon-center background-svg">
                      <img className="icon" src={homeIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sc-1knjrp2-0 kvhru9-1 hFBQXe jwymsC">
            <div class="sc-1knjrp2-0 tnjlua-0 hQTiJW dPHSaM">
              <div class="sc-1knjrp2-0 tnjlua-1 hQTiJW evoFhR">
                <div
                  class="tnjlua-2 kgveDA line"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div class="sc-1knjrp2-0 tnjlua-1 hQTiJW evoFhR">
                <div
                  class="tnjlua-2 kgveDA line"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div class="sc-1knjrp2-0 tnjlua-4 hQTiJW bveKLP">
                <img className="icon" src={cloudIcon} />
              </div>
            </div>
          </div>
          <div class="sc-1knjrp2-0 kvhru9-1 hQTiJW jwymsC">
            <div class="sc-1knjrp2-0 sc-1j1ze6p-0 hQTiJW desktop-size">
              <div class="sc-1knjrp2-0 sc-1j1ze6p-1 hQTiJW rounded-line"></div>
              <div class="sc-1knjrp2-0 sc-1j1ze6p-2 jdaYZB desktop-background">
                <div>
                  <div class="sc-1knjrp2-0 sc-1j1ze6p-3 hQTiJW svg-logo">
                    <div class="sc-1knjrp2-0 sc-1j1ze6p-4 hQTiJW icon-center background-svg">
                      <img className="icon" src={progfyIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="title">
            Practica online con equipos industriales reales
          </h1>
          <h2>¡Cuando quieras y donde quieras!</h2>
          <div className="mt-5">
            <button className="btn">Conoce mas</button>
            <button className="btn ml-3">Demo gratis</button>
          </div>
        </div>
      </ContentHome>

      <div className="container">
        <div id="saberMas" className="row">
          <div className="col-md-8 mb-5">
            <h2 className="mb-1">¿Qué hacemos?</h2>
            <hr />
            <p className="mt-4">
              Proporcionamos las herramientas necesarias para que cualquier
              estudiante pueda tener un excelente entrenamiento en el sector de
              automatización industrial.
            </p>
            <p className="mt-2 mb-4">
              Convertimos necesidad en oportunidad, no te quedes solo con la
              teoría!
            </p>
            {customer ? (
              <Link href="/dashboard">
                <a className="btn btn-info btn-lg text-decoration-none text-white">
                  IR AL DASHBOARD
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="btn btn-info btn-lg text-decoration-none text-white">
                  INICIAR SESIÓN
                </a>
              </Link>
            )}
          </div>

          <div className="col-md-4 mb-5">
            <h2 className="mb-1">Contáctanos</h2>
            <hr />
            <address className="mt-4">
              <strong>Nuestra info!</strong>
              <br />
              Lima - Perú
              <br />
            </address>
            <address>
              <span title="Phone">P: </span>
              +51 975803154
              <br />
              <span title="Email">E: </span>
              <a href="mailto:#">contacto@progfy.com</a>
            </address>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="overflow-hidden" style={{ height: "14.5rem" }}>
                <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/633860/machine-mill-industry-steam-633860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Aprende con los mejores</h4>
                <p className="card-text">
                  El entrenamiento brindado está diseñado por los mejores
                  profesionales del sector, lo que asegura que tu aprendizaje
                  sea eficiente.
                </p>
              </div>
              <div className="card-footer">
                <a href="#!" className="btn btn-dark">
                  Quiero saber más!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="overflow-hidden" style={{ height: "14.5rem" }}>
                <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Equipos reales</h4>
                <p className="card-text">
                  No estarás interactuando con simulaciones, creemos en la
                  práctica real y por eso entrenarás con máquinas 100%
                  OPERATIVAS.
                </p>
              </div>
              <div className="card-footer">
                <a href="#!" className="btn btn-dark">
                  Quiero saber más!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="overflow-hidden" style={{ height: "14.5rem" }}>
                <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Flexibilidad total</h4>
                <p className="card-text">
                  No hay horas obligatorias. Escoje el mejor horario para
                  aprender y comienza a interactuar con el sector de la
                  automatización industrial.
                </p>
              </div>
              <div className="card-footer">
                <a href="#!" className="btn btn-dark">
                  Quiero saber más!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
