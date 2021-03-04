import React from 'react';
import moment from 'moment';


const Schedule = ({schedule, index}) => {

    const {
        dateDay,
        hourInit,
        hourEnd,
        status
    } = schedule;

    const dateTo = dateDay.split('/');
    
    // const today = new Date();
    // const dayInit = new Date(`${dateTo[2]}/${dateTo[1]}/${dateTo[0]} ${hourInit}`);
    // const dayEnd = new Date(`${dateTo[2]}/${dateTo[1]}/${dateTo[0]} ${hourEnd}`);
    // console.log(dayInit.toLocaleString(), dayEnd.toLocaleString());
    // const rest = new Date(dayInit.getTime()).getTime() / (1000 * 60);
    
    
    // const tempInit = dayInit.getTime() - today.getTime();
    // // const tempEnd = dayEnd.getTime() - today.getTime();
    // const daytime = moment.duration(tempInit);
    // // const daytime = new Date(tempInit).getTime();
    // const hourTime = `Falta ${daytime.hours()} horas con ${daytime.minutes() + 1} minutos`;

    const classStatus = status === 'activo' ? 'alert-success' : 'alert-danger';

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{dateDay}</td>
            <td>{hourInit}</td>
            <td>{hourEnd}</td>
            <td>
                <span className={`alert ${classStatus} py-1 px-2`}>{status}</span>
            </td>
            {/* <td>
            </td> */}
        </tr>
    );
}
 
export default Schedule;