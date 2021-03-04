import React from 'react';
import paso1_1 from '../../assets/img/pasos/paso1_1.png';
import paso1_2 from '../../assets/img/pasos/paso1_2.png';
import paso1_3 from '../../assets/img/pasos/paso1_3.png';

import paso2_1 from '../../assets/img/pasos/paso2_1.png';
import paso2_2 from '../../assets/img/pasos/paso2_2.png';
import paso2_3 from '../../assets/img/pasos/paso2_3.png';
import paso2_4 from '../../assets/img/pasos/paso2_4.png';
import { useState } from 'react';
import styled from '@emotion/styled';


const ContentExample = styled.div`
    transition: 0.2s all !important;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    background-color: white;
    height: ${props => props.CustomHeight ? props.CustomHeight : '0rem'};
`;

const BtnClose = styled.button`
    position: absolute;
    transition: 0.4s all !important;
    top: -15px;
    right: -15px;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: white;
    font-size: 12pt;
    background-color: #dc3545;
    outline: none !important;
    z-index: 6;

    &:hover {
        color: #dc3545;
        border: 1px solid dimgray;
        font-weight: bold;
        background-color: white;
    }
`;


const DownloadProgfyDoc = ({setClose}) => {

    const [ option, setOption ] = useState(0);

    const stepsOne = [
        { text: 'Escoja un horario', src: paso1_1 },
        { text: 'Elija una hora disponible', src: paso1_2 },
        { text: 'Click en "Reservar', src: paso1_3 }
    ];

    const stepsTwo = [
        { text: 'Descargue desde el link del panel', src: paso2_1 },
        { text: 'Ejecute el archivo "Setup"', src: paso2_2 },
        { text: 'Click en "Instalar"', src: paso2_3 }
    ];

    // Recorre los pasos que se pase como parámetro
    const ContentStep = (xoption, steps, component = null) => (
        <ContentExample CustomHeight={`${option === xoption ? 'initial' : '0rem'}`}>
            {
            steps.map((step, index) => (
                <div key={index} className="row flex-column col-sm-4">
                    <label>{index}) {step.text}</label>
                    <img style={{width: '10rem', margin: 'auto'}} src={step.src} alt="horario"/>
                </div>
            ))
            }
        </ContentExample>
    );
    
    const handleSelectItem = (xoption) => {

        if(xoption === option) {
            setOption(0);
            return;
        }

        setOption(xoption);
    }

    const handleSetPasos = () => {
        localStorage.setItem('pasos', false);
        setClose(false);
    }

    return (
        <div className="card text-center position-relative">
            <BtnClose type="button" onClick={handleSetPasos}>X</BtnClose>
        <div className="card-header">
            <h3>¿Nuevo en Progfy?</h3>
        </div>
        <div className="card-body">
            <h5 className="card-title">Sigue estos pasos para utilizar correctamente nuestro servicio</h5>
            <br/>

            <div className="p-2">
                <ul className="list-group">
                    <li className={`list-group-item ${option === 1 ? 'border border-info' : ''}`}>
                        1. Registrar un horario en el panel "Crear Horario"
                        <a
                            href="#!"
                            type="button"
                            className="btn-link btn-block p-0 my-2"
                            onClick={() => handleSelectItem(1)}
                        >
                            {
                            option === 1 ? 'Cerrar' : 'Ver ejemplo'
                            }
                        </a>

                        {ContentStep(1, stepsOne)}
                    </li>

                    <li className={`list-group-item ${option === 2 ? 'border border-info' : ''}`}>
                        2. Descarga nuestro software especializado "Progfy Desktop"
                        <a
                            href="#!"
                            type="button"
                            className="btn-link btn-block p-0 my-2"
                            onClick={() => handleSelectItem(2)}
                        >
                            {
                            option === 2 ? 'Cerrar' : 'Ver ejemplo'
                            }
                        </a>

                        {ContentStep(2, stepsTwo)}
                    </li>

                    <li className={`list-group-item ${option === 3 ? 'border border-info' : ''}`}>
                        3. Ingresa a "Progfy Desktop" con tus credenciales y disfruta tus clases!
                        <a
                            href="#!"
                            type="button"
                            className="btn-link btn-block p-0 my-2"
                            onClick={() => handleSelectItem(3)}
                        >
                            {
                            option === 3 ? 'Cerrar' : 'Ver ejemplo'
                            }
                        </a>

                        <ContentExample CustomHeight={`${option === 3 ? 'initial' : '0rem'}`}>
                            <div className="row flex-column col-sm-4">
                                <label>1) Click en "Entrar"</label>
                                <img style={{width: '10rem', margin: 'auto'}} src={paso2_4} alt=""/>
                            </div>
                            <p className="mt-5 text-dark">Al ingresar, automáticamente reconocerá su horario y se conectará</p>
                        </ContentExample>
                    </li>
                </ul>
            </div>

            <button type="button" className="btn btn-primary mt-2" onClick={handleSetPasos}>Sé los pasos</button>
        </div>
        <div className="card-footer text-muted">
            Progfy Desktop requiere de una conexión estable a internet para su uso correcto
        </div>
        </div>
    );
}
 
export default DownloadProgfyDoc;