import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled';
import React, { Fragment, useContext, useEffect } from 'react'
import LandingHeader from '../src/components/home/LandingHeader';
import UserAuthContext from '../src/contexts/authenticate/UserAuthContext';
import Link from 'next/link';
import Layout from '../src/components/layouts/Layout';


const ContentHome = styled.div`
    height: 92.5vh;
    background: url('https://images.pexels.com/photos/208768/pexels-photo-208768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

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
          <div className="container h-100">
              <div className="row h-100 align-items-center">
                  <div className="col-lg-12 franja_negra rounded">
                      <h2 className="display-6 text-white font-weight-bold mt-5 mb-2 text-uppercase text-center">Primera plataforma de entrenamiento online en Automatización y Digitalización Industrial</h2>
                      <h3 className="mb-5 text-white text-center mt-4 font-italic">Programa equipos reales cuando quieras y desde donde quieras</h3>
                      <div className="row justify-content-center align-items-center">
                          <a className="btn btn-outline-light ml-3 mb-4 py-2 text-decoration-none mr-4" href="#saberMas">CONOCER MÁS</a>
                          <Link href="/signup"><a className="btn btn-light ml-5 mb-4 py-2 text-decoration-none btn-hover-cust" >DEMO GRATIS</a></Link>
                      </div>
                  </div>
              </div>
          </div>
      </ContentHome>

    <div className="container">

      <div id="saberMas" className="row">
        <div className="col-md-8 mb-5">
          <h2 className="mb-1">¿Qué hacemos?</h2>
          <hr/>
          <p className="mt-4">
              Proporcionamos las herramientas necesarias para que cualquier estudiante pueda tener un excelente entrenamiento en el sector de automatización industrial.
          </p>
          <p className="mt-2 mb-4">
              Convertimos necesidad en oportunidad, no te quedes solo con la teoría!
          </p>
          {
          customer
          ? <Link href="/dashboard"><a className="btn btn-info btn-lg text-decoration-none text-white">IR AL DASHBOARD</a></Link>
          : <Link href="/login"><a className="btn btn-info btn-lg text-decoration-none text-white">INICIAR SESIÓN</a></Link>
          }
        </div>

        <div className="col-md-4 mb-5">
          <h2 className="mb-1">Contáctanos</h2>
          <hr/>
          <address className="mt-4">
            <strong>Nuestra info!</strong>
            <br/>Lima - Perú
            <br/>
          </address>
          <address>
            <span title="Phone">P: </span>
            +51 975803154
            <br/>
            <span title="Email">E: </span>
            <a href="mailto:#">contacto@progfy.com</a>
          </address>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="overflow-hidden" style={{height: '14.5rem'}}>
              <img className="card-img-top" src="https://images.pexels.com/photos/633860/machine-mill-industry-steam-633860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Aprende con los mejores</h4>
              <p className="card-text">El entrenamiento brindado está diseñado por los mejores profesionales del sector, lo que asegura que tu aprendizaje sea eficiente.</p>
            </div>
            <div className="card-footer">
              <a href="#!" className="btn btn-dark">Quiero saber más!</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100">
          <div className="overflow-hidden" style={{height: '14.5rem'}}>
              <img className="card-img-top" src="https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Equipos reales</h4>
              <p className="card-text">No estarás interactuando con simulaciones, creemos en la práctica real y por eso entrenarás con máquinas 100% OPERATIVAS.</p>
            </div>
            <div className="card-footer">
              <a href="#!" className="btn btn-dark">Quiero saber más!</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100">
          <div className="overflow-hidden" style={{height: '14.5rem'}}>
              <img className="card-img-top" src="https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Flexibilidad total</h4>
              <p className="card-text">No hay horas obligatorias. Escoje el mejor horario para aprender y comienza a interactuar con el sector de la automatización industrial.</p>
            </div>
            <div className="card-footer">
              <a href="#!" className="btn btn-dark">Quiero saber más!</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Layout>
  )
}
