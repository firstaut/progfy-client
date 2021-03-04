import React, { useContext, useEffect, useState, Fragment } from 'react';
import AdminContext from '../../../contexts/admin/AdminContext';


const ConfigurationAdmin = () => {
    

    const { machine, getMachineByName, saveMachine } = useContext(AdminContext);
    
    const [ xmachine, setMachine ] = useState({
        server: '',
        username: '',
        password: ''
    });
    
    useEffect(() => {
        getMachineByName();
    }, []);

    if(!machine) {
        return <p className="alert alert-danger text-center mt-5">No hay una máquina registrada</p>;
    }

    if(xmachine.server === '' && xmachine.username === '' && xmachine.password === '') {
        setMachine(machine);
    }

    const { server, username, password } = xmachine;

    const handleMachineChange = (e) => {
        setMachine({
            ...xmachine,
            [e.target.name]: e.target.value
        });
    }

    const handleSendMachine = () => {
        saveMachine(xmachine);
    }

    

    return (
        <div className="p-4">
            <h2 className="col-sm-6 text-center">Mis configuraciones</h2>

            <form onSubmit={handleSendMachine} className="p-2 col-sm-6 mt-5">
                <div className="form-inline m-2">
                    <label className="col-6">URL del Servidor</label>
                    <input
                        className="form-control col-6"
                        type="text"
                        placeholder="Ingresa la URL del servidor"
                        name="server"
                        value={server}
                        onChange={handleMachineChange}
                    />
                </div>

                <div className="form-inline m-2">
                    <label className="col-6">Nombre de usuario</label>
                    <input
                        className="form-control col-6"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleMachineChange}
                    />
                </div>

                <div className="form-inline m-2">
                    <label className="col-6">Password</label>
                    <input
                        className="form-control col-6"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleMachineChange}
                    />
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-inline btn-info">Guardar</button>
                </div>
            </form>
        </div>
    );
}
 
export default ConfigurationAdmin;