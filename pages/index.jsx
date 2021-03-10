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
import plcImg from "../src/assets/img/plcc.png";
import people from "/Users/chirra/Desktop/First Automation/Cliente Progfy/progfy-client/src/components/home/data.js";
import Slider from "../src/components/home/Slider";

const ContentHome = styled.div`
  height: 100%;

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

      <ContentHome className="py-5">
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
          <div class="sc-1knjrp2-0 kvhru9-1 hQTiJW jwymsC ">
            <img className="plc desktop-size" src={plcImg} />
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="title">
            Practica online con equipos industriales reales
          </h1>
          <h2>¡Cuando quieras y donde quieras!</h2>
          <div className="mt-5 button-center">
            <div>
              <button className="btn-custom">Conoce mas</button>
              <button className="btn-custom ml-3">Demo gratis</button>
            </div>
          </div>
        </div>
        <div className="p-t-100 container">
          <Slider />
        </div>

        <div className="p-t-100 p-b-100 container">
          <h1 className="title-h1 p-b-50">Beneficios</h1>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-md-12">
              <div class="weather-card one">
                <div class="top">
                  <div class="wrapper">
                    <div class="mynav">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-left"></span>
                      </a>
                      <a href="javascript:;">
                        <span class="lnr lnr-cog"></span>
                      </a>
                    </div>
                    <h1 class="heading">Practica desde cualquier lado</h1>
                  </div>
                </div>
                <div class="bottom">
                  <div class="wrapper">
                    <ul class="forecast">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-up go-up"></span>
                      </a>
                      <li class="active">
                        <span class="date">
                          Conéctate desde cualquier parte del mundo, solo
                          requiere un ordenador y una conexión a internet para
                          comenzar a practicar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-md-12">
              <div class="weather-card rain one">
                <div class="top">
                  <div class="wrapper">
                    <div class="mynav">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-left"></span>
                      </a>
                      <a href="javascript:;">
                        <span class="lnr lnr-cog"></span>
                      </a>
                    </div>
                    <h1 class="heading">Equipos industriales reales</h1>
                  </div>
                </div>
                <div class="bottom">
                  <div class="wrapper">
                    <ul class="forecast">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-up go-up"></span>
                      </a>
                      <li class="active">
                        <span class="date">
                          A diferencia de otras plataformas, aquí haras uso de
                          equipo industrial en tiempo real para el
                          perfeccionamiento de tus habilidades
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-md-12">
              <div class="weather-card ben3 one">
                <div class="top">
                  <div class="wrapper">
                    <div class="mynav">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-left"></span>
                      </a>
                      <a href="javascript:;">
                        <span class="lnr lnr-cog"></span>
                      </a>
                    </div>
                    <h1 class="heading">Flexibilidad de horarios</h1>
                  </div>
                </div>
                <div class="bottom">
                  <div class="wrapper">
                    <ul class="forecast">
                      <a href="javascript:;">
                        <span class="lnr lnr-chevron-up go-up"></span>
                      </a>
                      <li class="active">
                        <span class="date">
                          Solo tú decidirás cuándo y cuánto tiempo dedicarás a
                          practicar, reserva tu horario y conéctate a nuestros
                          equipos de inmediato.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentHome>
      <footer class="bg-secondary text-center text-white">
        <div class="container p-4">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </section>
          <section class="mb-4">
            <p>
              Progfy tiene como finalidad contribuir a la educación práctica de
              carreras comprendidas en la rama de la Ingeniería mediante el uso
              de software especializado que está al alcance de todos, siendo los
              principales beneficiados tanto alumnos universitarios como
              instituciones educativas.
            </p>
          </section>
          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-4 mb-4 mb-md-4 col-mobile">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-4 mb-4 mb-md-4 col-mobile">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-4 mb-4 mb-md-4 col-mobile">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 First Automation
        </div>
      </footer>
    </Layout>
  );
}
