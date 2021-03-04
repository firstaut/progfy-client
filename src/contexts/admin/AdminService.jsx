import React, { useReducer } from 'react';

import AdminTypes from '../../types/AdminTypes';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import serviceAxios from '../../config/serviceAxios';



const {
    LST_CUSTOMER,
    LST_COUPONS,
    ADD_COUPONS,
    UPD_COUPONS,
    DLT_COUPONS,
    GET_MACHINE,
    UPD_MACHINE

} = AdminTypes;

const AdminService = (props) => {

    const initialState = {
        customers: [],
        coupons: [],
        machine: null
    };


    const [ state, dispatch ] = useReducer(AdminReducer, initialState);


    const getCustomers = async () => {
        try {

            const response = await serviceAxios.get('/customer/all');

            if(response.data.ok === true) {
                dispatch({
                    type: LST_CUSTOMER,
                    payload: response.data.customers
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getCoupons = async () => {
        try {
            
            const response = await serviceAxios.get('/coupon/all');

            if(response.data.ok === true) {
                dispatch({
                    type: LST_COUPONS,
                    payload: response.data.coupons
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getMachineByName = async () => {
        try {
            const machine = {
                name: 'Maquina01'
            };

            const response = await serviceAxios.post('/machine/get-by-name', machine);

            if(response.data.ok === true) {
                dispatch({
                    type: GET_MACHINE,
                    payload: response.data.machine
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const saveMachine = async (machine) => {
        try {
            
            await serviceAxios.put('/machine/upd', machine);

            getMachineByName();

        } catch (error) {
            console.log(error);
        }
    }

    const saveCoupon = async (coupon) => {
        try {
            
            const response = await serviceAxios.post('/coupon/add', coupon);

            if(response && response.status === 200) {
                dispatch({
                    type: ADD_COUPONS,
                    payload: response.data.coupon
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const editCoupon = async (coupon) => {
        try {
            
            await serviceAxios.put('/coupon/upd', coupon);

            getCoupons();

        } catch (error) {
            console.log(error);
        }
    }

    const dltCoupon = async (couponId) => {
        try {
            
            const coupon = {
                _id: couponId
            }
            
            await serviceAxios.put('/coupon/dlt', coupon);

            getCoupons();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminContext.Provider
            value={{
                customers: state.customers,
                coupons: state.coupons,
                machine: state.machine,
                getCustomers,
                getCoupons,
                getMachineByName,
                saveMachine,
                saveCoupon,
                editCoupon,
                dltCoupon
            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
}
 
export default AdminService;