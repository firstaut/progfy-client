import React, { Fragment, useContext, useEffect } from 'react';
import ScheduleContext from '../../contexts/schedules/ScheduleContext';
import Schedule from './Schedule';
import { useState } from 'react';


const ListSchedules = () => {

    const { schedules, lstSchedulesByCustomer } = useContext(ScheduleContext);

    useEffect(() => {
        lstSchedulesByCustomer();
    // eslint-disable-next-line
    }, []);

    const [ order, setOrder ] = useState(1);

    return (
        <Fragment>
            <h4 className="text-dark text-center pb-2">Mi Lista de horarios</h4>
            <div className="pb-2 w-25 text-left d-none">
                Ordernar por: 
                <select className="form-control" onChange={e => setOrder(e.target.value)}>
                    <option value="1">Más reciente</option>
                    <option value="2">Más tardíos</option>
                    <option value="3">Status - Activos</option>
                    <option value="4">Status - Inactivos</option>
                </select>
            </div>
            {/* {
            schedules.length > 0
            ? <div className="row justify-content-sm-between">
            {
            schedules.map(schedule => (
                <Schedule key={schedule._id} schedule={schedule} />
            ))
            }
            </div>
            : <p className="alert alert-danger text-center">Aún no tiene un horario creado</p>
            } */}

            <table className="table text-center m-auto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Hora de inicio</th>
                        <th>Hora de culminación</th>
                        <th>status</th>
                        {/* <th>Comienza en...</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                    schedules.map((schedule, index) => (
                        <Schedule key={schedule._id} schedule={schedule} index={index} />
                    ))
                    }
                    {/* <tr>
                        <td>1</td>
                        <td>12/08/2020</td>
                        <td>12:00</td>
                        <td>12:30</td>
                        <td>activo</td>
                        <td>30min</td>
                    </tr> */}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default ListSchedules;