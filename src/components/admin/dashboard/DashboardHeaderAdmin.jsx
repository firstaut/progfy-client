import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import UserAuthContext from '../../../contexts/authenticate/UserAuthContext';
import Link from 'next/link';



const ContentHeaderAdmin = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 8rem;
    text-align: center;
    color: white;

    h2 {
        font-size: 30pt;
    }

    p {
        font-size: 16pt;
    }
`;


const DashboardHeaderAdmin = () => {

    const { customer, getUserAuthenticated } = useContext(UserAuthContext);


    // useEffect(() => {

    //     getUserAuthenticated();

    // }, []);

    return (
        <ContentHeaderAdmin className="bg-info">
                <div>
                    <h2>Panel de control</h2>
                    <p>Bienvenido: {customer ? customer.names + ' ' + customer.lastnames : ''}</p>
                </div>
                <button className="btn btn-dark text-white">
                    <Link href="/dashboard/crear">
                        <a
                            style={{width: '12rem', height: '2.5rem'}}
                            className="text-white"
                        >IR AL DASHBOARD</a>
                    </Link>
                </button>
        </ContentHeaderAdmin>
    );
}
 
export default DashboardHeaderAdmin;