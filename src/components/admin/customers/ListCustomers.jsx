import React, { Fragment } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/admin/AdminContext';
import CustomerItem from './CustomerItem';
import { useEffect } from 'react';


const ListCustomers = () => {

    const { customers, getCustomers } = useContext(AdminContext);

    console.log(customers);

    useEffect(() => {

        getCustomers();

    }, []);

    return (
        <Fragment>
            <div className="p-4">
                <div className="text-center">
                    <h2 className="p-4 text-center d-inline-block mr-5">Usuarios de Progfy</h2>
                    <label className="alert alert-info">{customers.length} usuarios en total</label>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th>Teléfono/Celular</th>
                            <th>Créditos disponibles</th>
                            <th>Créditos usados</th>
                            <th>Creado el</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        customers.map((cust, index) => (
                            <CustomerItem
                                key={cust._id}
                                cust={cust}
                                index={index}
                            />
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}
 
export default ListCustomers;