import React, { Fragment } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/admin/AdminContext';
import CouponItem from './CouponItem';
import EditAddModal from './EditAddModal';
import styled from '@emotion/styled';
import { useState } from 'react';
import DeleteCouponModal from './DeleteCouponModal';
import { useEffect } from 'react';



const ContentModal = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 10;
`;



const ListCoupons = () => {


    const { coupons, getCoupons } = useContext(AdminContext);

    const [ currentOption, setCurrentOption ] = useState('');
    const [ currentCoupon, setCurrentCoupon ] = useState(null);


    console.log(coupons);

    useEffect(() => {
        getCoupons();
    }, []);


    return (
        <Fragment>
            <div className="p-4">
                <div className="text-center">
                    <button
                        onClick={() => setCurrentOption('add')}
                        className="btn btn-success mr-5"
                    >Crear Nuevo</button>
                    <h2 className="p-4 text-center d-inline-block mr-5">Usuarios de Progfy</h2>
                    <label className="alert alert-info">{coupons.length} usuarios en total</label>
                </div>

                {
                currentOption.trim() !== ''
                ? <ContentModal>
                    {
                    currentOption.trim() === 'edit' || currentOption.trim() === 'add'
                    ? <EditAddModal option={currentOption} setCurrentOption={setCurrentOption} xcoupon={currentCoupon} />
                    : <DeleteCouponModal xcoupon={currentCoupon} setCurrentOption={setCurrentOption} />
                    }
                </ContentModal>
                : null
                }

                <table className="table table-striped">
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Descripción</th>
                            <th>Serie</th>
                            <th>Créditos a otorgar</th>
                            <th>Cantidad de uso</th>
                            <th>Cantidad restante</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Creado el</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        coupons.map((coupon, index) => (
                            <CouponItem
                                key={coupon._id}
                                coupon={coupon}
                                index={index}
                                setCurrentOption={setCurrentOption}
                                setCurrentCoupon={setCurrentCoupon}
                            />
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}
 
export default ListCoupons;