import React, { useContext, useEffect, Fragment } from "react";
import { useRouter } from 'next/router';
import UserAuthContext from "../../contexts/authenticate/UserAuthContext";

const CustomerProtectedRoute = ({ children, path = '/' }) => {

  const { authenticate, getUserAuthenticated } = useContext(UserAuthContext);

  const router = useRouter();
  
  useEffect(() => {

    getUserAuthenticated();

    if(!authenticate) {
      router.push(path);
    }

  }, [authenticate]);

  // if(!authenticate) {
  //   router.push(path);
  //   return null;
  // }

  return (
    <Fragment>
      {
        authenticate
        ? children
        : null
      }
    </Fragment>
  );
};

export default CustomerProtectedRoute;
