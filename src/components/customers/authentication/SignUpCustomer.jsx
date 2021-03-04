import React, { Fragment, useState, useContext } from 'react';

import logo from '../../../assets/img/logo.png';
import file from '../../../assets/files/Progfy.zip';
import serviceAxios from '../../../config/serviceAxios';
import Swal from 'sweetalert2';


import styled from '@emotion/styled';
import { Link, useHistory } from 'react-router-dom';
import UserAuthContext from '../../../contexts/authenticate/UserAuthContext';



const ContentLoading = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
`;

const FormSignUpCustomer = () => {

    const { loginCustomer } = useContext(UserAuthContext);

    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const history = useHistory();

    const [ customer, setCustomer ] = useState({
        names: '',
        lastnames: '',
        email: '',
        phone: '',
        password: ''
    });

    const { names, lastnames, email, phone, password } = customer;

    const [ schedule, setSchedule ] = useState({
        status: 'activo',
        timeInit: '',
        timeEnd: ''
    });


    const handleChangeCustomer = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeSchedule = (e) => {
        setSchedule({
            ...schedule,
            [e.target.name]: e.target.value
        });
    }

    const parseDateTime = (xtime, separator = '/') => {
        const m = new Date(xtime);
        return m.getFullYear() + separator + (m.getMonth()+1) + separator + m.getDate() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();
    }


    const handleSubmitSignUp = async (e) => {
        e.preventDefault();

        if(names.trim() === '' ||
           lastnames.trim() === '' ||
           email.trim() === '' ||
           phone.trim() === '' ||
           password.trim() === '') {

            setError(true);

            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                timer: 3000
            });

            return;
        }

        setError(false);
        setLoading(true);
        await serviceAxios.post('/customer/add', customer);
        setLoading(false);
        await loginCustomer(customer);

        Swal.fire({
            icon: 'success',
            title: 'Se registró correctamente',
            timer: 3000
        });

        history.push('/dashboard');
    }

    const handleClickDownload = () => {

        const blob = new Blob([file]);
        const objectURL = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectURL;
        link.setAttribute('download', 'Progfy-install.zip'); //or any other extension
        document.body.appendChild(link);
        link.click();

        // window.open(objectURL);
    }


    return (
        <Fragment>
            {
            loading
            ? <ContentLoading className="position-fixed d-flex">
                <div className="spinner-border text-primary"></div>
            </ContentLoading>
            : null
            }
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-20">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-header bg-white text-center">
                            <img src={logo} alt="Logo Progfy" />
                        </div>
                        
                        <h3 className="p-0 mt-4 text-center">Cree una cuenta nueva</h3>

                        <div className="card-body pb-4">
                            <form
                                onSubmit={handleSubmitSignUp}
                            >
                                <div className="form-row m-b-55">
                                    <div className="name">Nombre completo</div>
                                    <div className="value">
                                        <div className="row row-space">
                                            <div className="col-5">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="names"
                                                        value={names}
                                                        onChange={handleChangeCustomer}
                                                    />
                                                    <label className="label--desc">Nombres</label>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="lastnames"
                                                        value={lastnames}
                                                        onChange={handleChangeCustomer}
                                                    />
                                                    <label className="label--desc">Apellidos</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
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

                                <div className="form-row m-b-55">
                                    <div className="name">Teléfono</div>
                                    <div className="value">
                                        <div className="row row-refine">
                                            <div className="col-9">
                                                <div className="input-group-desc">
                                                    <input
                                                        className="input--style-5"
                                                        type="text"
                                                        name="phone"
                                                        value={phone}
                                                        onChange={handleChangeCustomer}
                                                    />

                                                    <label className="label--desc">Número de contacto</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="btn btn-block btn-success col-6 m-auto" type="submit">Registrarme</button>
                                </div>
                            </form>

                            <div className="text-center pt-3">
                                Ya posee una cuenta? <Link to="/login">INGRESAR</Link>
                                <a className="text-center pt-3 d-block" href={file} download="Progfy-install.zip">Descargar instalador Progfy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default FormSignUpCustomer;