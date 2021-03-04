import React, { Fragment } from 'react';
import { useState } from 'react';



const DashboardOptionsAdmin = ({selected, setSelected}) => {

    const options = [
        { id: 1, img: 'www.images.com/', text: 'INICIO' },
        { id: 2, img: 'www.images.com/', text: 'CLIENTES' },
        { id: 3, img: 'www.images.com/', text: 'CUPONES' },
        { id: 4, img: 'www.images.com/', text: 'REPORTES' }
    ];
    

    return (
        <Fragment>
            {
            options.map(option => (
                <button
                    key={option.id}
                    className={`btn btn-block ${selected === option.id ? 'btn-info': 'btn-dark'}`}
                    onClick={() => setSelected(option.id)}
                >{option.text}</button>
            ))
            }
        </Fragment>
    );
}
 
export default DashboardOptionsAdmin;