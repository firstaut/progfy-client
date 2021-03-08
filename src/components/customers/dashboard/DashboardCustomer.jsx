import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../../layouts/Header';
import { useRouter } from 'next/router';
import progfyzip from '../../../assets/files/Progfy.zip';
import DownloadProgfyDoc from '../../documentation/DownloadProgfyDoc';

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

const ContentDashboard = styled.div`
    height: 100vh;
`;

const BtnOption = styled.button`
    width: 100%;
    padding: 0px;
    outline: none !important;
    outline-color: transparent;
    border: none !important;
`;



const DashboardCustomer = ({component: Component}) => {

    const router = useRouter();

    const [ options, setOptions ] = useState([
        'crear',
        'horarios'
    ]);

    // Current path
    const option = router.pathname.split('/')[2];

    const pasos = localStorage.getItem('pasos');

    const [ available, setAvailable ] = useState(false);

    const handleChooseOption = (xoption) => {
        router.push(`/dashboard/${xoption}`);
    }

    useEffect(() => {
        if(pasos && pasos.trim() === 'true') {
            setAvailable(true);
        }

        localStorage.setItem("dashboard", true);
    }, []);


    return (
        <ContentDashboard>
            <Header />
            <div className="row h-100">
                <div className="col-sm-2 bg-dark">
                    <ul className="list-group p-2 mt-2">
                        <li className={`list-group-item m-2 ${option === options[0] ? 'bg-info' : ''}`}>
                            <BtnOption onClick={() => handleChooseOption(options[0])}>Crear horario</BtnOption>
                        </li>
                        <li className={`list-group-item m-2 ${option === options[1] ? 'bg-info' : ''}`}>
                            <BtnOption onClick={() => handleChooseOption(options[1])}>Mis horarios</BtnOption>
                        </li>
                        <li className={`list-group-item m-2`}>
                            <a className="text-center m-0 p-0 d-block" href="http://3.227.226.102/Progfy-desktop.zip" download="Progfy-install.zip">Descargar instalador Progfy</a>
                        </li>

                        <li className={`list-group-item m-2 p-0 text-center bg-dark`}>
                            <BtnOption
                                onClick={() => setAvailable(!available)}
                                type="button"
                                className="btn btn-warning text-dark"
                            >Instrucciones de uso</BtnOption>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-10 p-5 bg-white">
                    {
                    available
                    ?<ContainerModal>
                        <DownloadProgfyDoc setClose={setAvailable} />
                    </ContainerModal>
                    : null
                    }
                    { <Component /> || null }
                </div>
            </div>
        </ContentDashboard>
    );
}
 
export default DashboardCustomer;
