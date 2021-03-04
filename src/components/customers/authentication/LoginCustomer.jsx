import React, { Fragment, useContext, useState, useEffect } from 'react';
import logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import UserAuthContext from '../../../contexts/authenticate/UserAuthContext';
import Swal from 'sweetalert2';


const LoginCustomer = (props) => {

    const { authenticate, loginCustomer, getUserAuthenticated  } = useContext(UserAuthContext);

    const [ customer, setCustomer ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = customer;

    const handleChangeCustomer = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const handleLoginCustomer = (e) => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                timer: 3000
            });

            return;
        }

        loginCustomer(customer);
    }

    return (
        <Fragment>
            <div className="page-wrapper bg-gra-03 p-t-45">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-header bg-white text-center">
                            <img src={logo} alt="Logo Progfy" />
                        </div>
                        
                        <h3 className="p-0 mt-4 text-center">Inicie Sesión</h3>

                        <div className="card-body pb-4">
                            <form
                                onSubmit={handleLoginCustomer}
                            >
                                <div className="form-row">
                                    <div className="name">Correo</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input
                                                className="input--style-5"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={handleChangeCustomer}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="name">Contraseña</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input
                                                className="input--style-5"
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={handleChangeCustomer}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        className="btn btn-block btn-success col-6 m-auto"
                                        type="submit"
                                    >INGRESAR</button>
                                </div>
                            </form>

                            <div className="p-2 mt-2 text-center">
                                Aún no posee una cuenta ? <Link to="/signup">REGISTRARME</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default LoginCustomer;