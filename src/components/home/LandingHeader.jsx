import React, { useContext, useEffect } from 'react';
import UserAuthContext from '../../contexts/authenticate/UserAuthContext';
//import progfyImg from '../../assets/img/progfy.png';
import Link from 'next/link';



const LandingHeader = () => {

    const { customer, closeSession, getUserAuthenticated } = useContext(UserAuthContext);

    const handleCloseSession = () => {
        closeSession();
    }

    useEffect(() => {
        getUserAuthenticated();
    }, []);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
            <div className="p-0">
                <img style={{width: '15rem', height: 'auto'}} src={''} alt=""/>
                <label className="text-center text-white p-2 text-uppercase ml-4"></label>
            </div>

            <div className="" id="navbarSupportedContent">
                {
                customer && customer.kind === 'admin'
                ? <Link href="/admin">
                    <a style={{width: '12rem'}} className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text">
                        PANEL DE CONTROL
                    </a>
                </Link>
                : null
                }
                {
                customer
                ? <Link href="/dashboard/crear">
                    <a style={{width: '12rem'}} className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text" >
                        IR AL DASHBOARD
                    </a>
                    </Link>
                : <Link href="/login">
                    <a style={{width: '12rem'}} className="btn btn-info ml-2 p-2 text-decoration-none text-white center-text">
                        INICIAR SESIÓN
                    </a>
                </Link>
                }
                
            </div>
        </nav>
    );
}
 
export default LandingHeader;