import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import AdminContext from '../../../contexts/admin/AdminContext';
import Swal from 'sweetalert2';



const BtnClose = styled.button`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    color: white;
    border: none;
    outline: none !important;
    outline-color: none !important;
    z-index: 15;
`;



const EditAddModal = ({option, setCurrentOption, xcoupon}) => {

    const { saveCoupon, editCoupon } = useContext(AdminContext);

    const [ coupon, setCoupon ] = useState({
        name: '',
        serie: '',
        countInit: 1,
        kind: 'normal',
        credits: 1
    });

    const {
        name,
        serie,
        countInit,
        kind,
        credits
    } = coupon;

    const handleChangeCoupon = (e) => {
        setCoupon({
            ...coupon,
            [e.target.name]: e.target.value
        });
    }

    const closeModal = () => {
        setCurrentOption('');
    }

    const handleAddUpdCoupon = (e) => {
        e.preventDefault();

        if(name.trim() === '' ||
           serie.trim() === '' ||
           countInit <= 0 ||
           kind.trim() === '') {
            Swal.fire({
                title: 'Los campos ingresados no son válidos',
                icon: 'error'
            });
            return;
        }

        if(option === 'add') {
            saveCoupon(coupon);
        } else {
            editCoupon(coupon);
        }

        setCurrentOption('');
    }

    useEffect(() => {
        if(xcoupon) {
            setCoupon(xcoupon);
        }
    }, []);



    return (
        <div>
            <form
                style={{
                    width: '22rem',
                    backgroundColor: 'white',
                    padding: '1rem',
                    borderRadius: '1rem',
                    position: 'relative'
                }}
                onSubmit={handleAddUpdCoupon}
            >
                <BtnClose
                    type="button"
                    className="bg-danger"
                    onClick={closeModal}
                >X</BtnClose>
                {
                xcoupon
                ? <div>
                        <h6 className="text-center">ACTUALIZAR</h6>
                        <h5 className="text-center">{name} - {serie}</h5>
                    </div>
                : <h6 className="text-center">AGREGAR NUEVO CUPÓN</h6>
                }

                <div className="form-group">
                    <label>Descripción:</label>
                    <input
                        name="name"
                        value={name}
                        className="form-control"
                        type="text"
                        onChange={handleChangeCoupon}
                    />
                </div>

                <div className="form-group">
                    <label>Serie:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="serie"
                        value={serie}
                        onChange={handleChangeCoupon}
                    />
                </div>

                <div className="form-group">
                    <label>Créditos a otorgar:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="credits"
                        value={credits}
                        onChange={handleChangeCoupon}
                    />
                </div>

                <div className="form-group">
                    <label>Cantidad de uso:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="countInit"
                        value={countInit}
                        onChange={handleChangeCoupon}
                    />
                </div>

                <div className="form-group">
                    <label>Tipo:</label>
                    <select
                        className="form-control"
                        name="kind"
                        value={kind}
                        onChange={handleChangeCoupon}
                    >
                        <option value="normal">Normal</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>

                <div className="text-center">
                    <button
                        className={`btn btn-inline ${option === 'edit' ? ' btn-warning' : 'btn-info'}`}>
                        {
                        option === 'edit'
                        ? 'ACTUALIZAR'
                        : 'GUARDAR'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default EditAddModal;