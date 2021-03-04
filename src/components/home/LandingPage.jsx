import React, { Fragment, useEffect, useContext } from 'react';
import LandingHeader from './LandingHeader';
import styled from '@emotion/styled';
import UserAuthContext from '../../contexts/authenticate/UserAuthContext';


const ContentHome = styled.div`
    height: 92.5vh;
    background: url('https://images.pexels.com/photos/208768/pexels-photo-208768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

    .franja_negra {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;


const LandingPage = () => {

  const { customer, getUserAuthenticated } = useContext(UserAuthContext);

  useEffect(() => {
    getUserAuthenticated();

    const dashboard = localStorage.getItem('dashboard');

    if(dashboard) {
      if(dashboard === 'true' && customer) {
        // history.push('/dashboard');
      } else {
        // history.push('/');
      }
    }
    
  }, []);
  

return (
  <Fragment>
    <LandingHeader />

    <ContentHome className="py-5 mb-5">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-lg-12 franja_negra">
                    <h2 className="display-6 text-white font-weight-bold mt-5 mb-2 text-uppercase text-center">Primera plataforma de entrenamiento online en Automatización y Digitalización Industrial</h2>
                    <h5 className="mb-5 text-white text-center mt-4">Programa equipos reales cuando quieras y desde donde quieras</h5>
                    <div className="row justify-content-center">
                        <a className="btn btn-info ml-3 mb-4 p-3 text-decoration-none text-white" href="#saberMas">CONOCER MÁS</a>
                        <Link className="btn btn-info ml-3 mb-4 p-3 text-decoration-none text-white" to="/signup">DEMO GRATIS</Link>
                    </div>
                </div>
            </div>
        </div>
    </ContentHome>

  <div className="container">

    <div id="saberMas" className="row">
      <div className="col-md-8 mb-5">
        <h2>¿Qué hacemos?</h2>
        <hr/>
        <p>
            Proporcionamos las herramientas necesarias para que cualquier estudiante pueda tener un excelente entrenamiento en el sector de automatización industrial.
        </p>
        <p>
            Convertimos necesidad en oportunidad, no te quedes solo con la teoría!
        </p>
        {
        customer
        ? <Link className="btn btn-info btn-lg text-decoration-none text-white" to="/dashboard">IR AL DASHBOARD</Link>
        : <Link className="btn btn-info btn-lg text-decoration-none text-white" to="/login">INICIAR SESIÓN</Link>
        }
      </div>

      <div className="col-md-4 mb-5">
        <h2>Contáctanos</h2>
        <hr/>
        <address>
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
  </Fragment>
);
}
 
export default LandingPage;