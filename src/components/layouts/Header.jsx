import React, { useContext } from 'react';
import UserAuthContext from '../../contexts/authenticate/UserAuthContext';
import ScheduleContext from '../../contexts/schedules/ScheduleContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Header = () => {

    const { customer, credits, consumed, closeSession , getUserAuthenticated } = useContext(UserAuthContext);
    const { schedules, lstSchedulesByCustomer } = useContext(ScheduleContext);

    const router = useRouter();

    const assigned = schedules.filter(sch => sch.status === 'activo').length || 0;
    
    const nameComplete = customer ? customer.names + ' ' + customer.lastnames : '';

    const handleCloseSession = () => {
        localStorage.setItem("dashboard", false);
        closeSession();
    }

    const handleGoToLandingPage = () => {
        localStorage.setItem("dashboard", false);
        router.push('/');
    }

    useEffect(() => {
        lstSchedulesByCustomer();
    }, []);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="p-0">
                <p className="text-white p-2">Bienvenido: {nameComplete}</p>
            </div>

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <div className="row col-sm-8 justify-content-end">
                    <label className="alert alert-light mr-2">Horas disponibles: {credits}h</label>
                    <label className="alert alert-light mr-2">Horas asignadas: {assigned}h</label>
                    <label className="alert alert-light mr-2">Horas consumidos: {consumed}h</label>
                </div>

                <div>
                    <button onClick={handleGoToLandingPage} type="button" className="btn btn-outline-info mr-2">Ir al inicio</button>

                    <button
                        type="button"
                        onClick={handleCloseSession}
                        className="btn btn-info"
                    >Cerrar Sesión</button>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;