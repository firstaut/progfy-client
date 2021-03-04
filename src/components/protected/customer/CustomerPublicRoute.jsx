import React, { useContext, useEffect, Fragment } from "react";
import { useRouter } from 'next/router';
import UserAuthContext from "../../../contexts/authenticate/UserAuthContext";

const CustomerPublicRoute = ({ children, path = '/dashboard/crear' }) => {

  const { authenticate, getUserAuthenticated } = useContext(UserAuthContext);

  const router = useRouter();
  
  useEffect(() => {

    getUserAuthenticated();

    if(authenticate) {
      router.push(path);
    }
  // eslint-disable-next-line
  }, [authenticate]);

  

  return (
    <Fragment>
      {
        !authenticate
        ? children
        : null
      }
    </Fragment>
  );
};

export default CustomerPublicRoute;
