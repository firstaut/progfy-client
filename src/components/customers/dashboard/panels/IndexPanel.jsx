import React, { useState } from 'react';
//import ListSchedules from '../../../schedules/ListSchedules';
import CreateSchedule from './CreateSchedule';
//import ListPackages from '../../../packages/ListPackages';
//import DownloadProgfyDoc from '../../../documentation/DownloadProgfyDoc';
import styled from '@emotion/styled';
import { useEffect } from 'react';


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

const IndexPanel = ({option, available, setAvailable}) => {

    // const [ close, setClose ] = useState(available);
    const pasos = localStorage.getItem('pasos');

    useEffect(() => {

        if(pasos) {
            setAvailable(true);
        }

        localStorage.setItem("dashboard", true);
    }, []);


    return (
        <div>
            {/* {
            available === true ? null
            : <ContainerModal>
                <DownloadProgfyDoc setClose={setAvailable} />
            </ContainerModal>
            }
             */}
            {/* {
            option === 1
            ? <CreateSchedule />
            : option === 2
            ? <ListSchedules />
            : option === 3
            ? <ListPackages />
            : null
            } */}
        </div>
    );
}
 
export default IndexPanel;