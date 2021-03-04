import React, { useContext, useState, Fragment } from 'react';
import UserAuthContext from '../src/contexts/authenticate/UserAuthContext';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Layout from '../src/components/layouts/Layout';
import logo from '../src/assets/img/logo.png';
import CustomerPublicRoute from '../src/components/protected/customer/CustomerPublicRoute';



const LoginCustomer = () => {

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
        <Layout>
            <CustomerPublicRoute>
                <div className="page-wrapper bg-gra-03-2 p-t-45">
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

                                    <div className="pt-4 text-center">
                                        <button
                                            className="btn btn-inline btn-success col-6 m-auto"
                                            type="submit"
                                        >INGRESAR</button>
                                    </div>
                                </form>

                                <div className="p-2 mt-2 text-center">
                                    No tienes una cuenta ? <Link href="/signup"><a>REGISTRARME</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomerPublicRoute>
        </Layout>
    );
}
 
export default LoginCustomer;