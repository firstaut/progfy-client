import React, { useContext, useEffect, Fragment } from "react";
import { useRouter } from 'next/router';
import UserAuthContext from "../../../contexts/authenticate/UserAuthContext";

const AdminProtectedRoute = ({ children, path = '/' }) => {

  const { customer, authenticate, getUserAuthenticated } = useContext(UserAuthContext);

  const router = useRouter();
  
  useEffect(() => {

    getUserAuthenticated();

    if(!authenticate || !customer) {
      router.push(path);
    } else if(customer.kind !== 'admin') {
      router.push(path);
    }

  }, [authenticate]);

  console.log(authenticate);

  return (
    <Fragment>
      {
        authenticate && customer && customer.kind === 'admin'
        ? children
        : null
      }
    </Fragment>
  );
};

export default AdminProtectedRoute;
