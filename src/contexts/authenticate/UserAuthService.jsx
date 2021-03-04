import React, { useReducer } from "react";
import UserAuthContext from "./UserAuthContext";
import UserAuthReducer from "./UserAuthReducer";
import CustomerTypes from "../../types/CustomerTypes";
import serviceAxios from "../../config/serviceAxios";

import tokenAuth from "../../config/TokenAuth";
import Swal from "sweetalert2";
import Axios from "axios";

const { LGN_CUST, SSN_CUST, OUT_CUST, GET_CREDITS_CONSUMED, DECREMENT_CREDITS } = CustomerTypes;

const UserAuthService = (props) => {

  const initialState = {
    authenticate: false,
    customer: null,
    credits: 0,
    consumed: 0,
    test: { id: "" },
  };

  const [ state, dispatch ] = useReducer(UserAuthReducer, initialState);

  const loginCustomer = async (xcustomer) => {
    try {
      console.log(xcustomer);
      const response = await serviceAxios.post("/customer/login", xcustomer);
      
      console.log(response);

      if (response.status === 200) {
        if(response.data.ok === true) {
          dispatch({
            type: LGN_CUST,
            payload: response.data.token,
          });
  
          localStorage.setItem("x-auth-token", response.data.token);
        } else{ 
          Swal.fire({
              icon: 'error',
              title: 'Usuario o Contraseña incorrectos',
              timer: 3000
          });
        }
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario o Contraseña incorrectos',
            timer: 3000
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  const getUserAuthenticated = async () => {

    const token = localStorage.getItem("x-auth-token");

    try {
      
      tokenAuth(token);

      const response = await serviceAxios.get("customer/auth");

      if (response.status === 200) {
        dispatch({
          type: SSN_CUST,
          payload: response.data.customer,
        });

        getCreditsAndConsumed(response.data.customer);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const closeSession = async () => {
    try {
      
      localStorage.removeItem("x-auth-token");

      dispatch({
        type: OUT_CUST
      });

    } catch (error) {
      console.log(error);
    }
  }

  const getCreditsAndConsumed = async (customer) => {
    try {
      
      dispatch({
        type: GET_CREDITS_CONSUMED,
        payload: customer
      });

    } catch (error) {
      console.log(error);
    }
  }

  const addCreditsByCustomer = async (coupon) => {

    let successfull = {
      ok: false,
      msg: 'Cupón no válido'
    };

    const token = localStorage.getItem("x-auth-token");

    try {

        if (token) {
            tokenAuth(token);
        }

        console.log(coupon);
        
        const response = await serviceAxios.put('/coupon/add-limit', coupon);

        if(response.status === 200) {
          successfull.ok = response.data.ok;
          successfull.msg = response.data.msg;
        }

    } catch (error) {
        console.log(error);
    }

    return successfull;
  }

  // const decrementCredits = async (cant) => {
  //   try {
      
  //     dispatch({
  //       type: DECREMENT_CREDITS,
  //       payload: cant
  //     });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  return (
    <UserAuthContext.Provider
      value={{
        authenticate: state.authenticate,
        customer: state.customer,
        test: state.test,
        credits: state.credits,
        consumed: state.consumed,
        loginCustomer,
        getUserAuthenticated,
        closeSession,
        addCreditsByCustomer
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthService;
