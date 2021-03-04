import React from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import AdminContext from '../../../contexts/admin/AdminContext';


const ContentDeleteCoupon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 22rem;
    height: 12rem;
    border-radius: 0.5rem;
`;

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



const DeleteCouponModal = ({xcoupon, setCurrentOption}) => {

    const { dltCoupon } = useContext(AdminContext);

    const closeModal = () => {
        setCurrentOption('');
    }

    const deleteCouponById = (couponId) => {
        dltCoupon(couponId);
        setCurrentOption('');
    }

    return (
        <ContentDeleteCoupon>
            <BtnClose
                onClick={closeModal}
                className="bg-danger"
            >X</BtnClose>
            <h5 className="text-center">¿Está seguro de eliminar el cupón {xcoupon.name}?</h5>
            <div className="row justify-content-around mt-4">
                <button
                    type="button"
                    onClick={() => deleteCouponById(xcoupon._id)}
                    className="btn btn-danger mx-2"
                >Sí, eliminar</button>
                <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn-dark mx-2"
                >Cancelar</button>
            </div>
        </ContentDeleteCoupon>
    );
}
 
export default DeleteCouponModal;