import React, { useContext, useState, Fragment } from "react";
import UserAuthContext from "../src/contexts/authenticate/UserAuthContext";
import Swal from "sweetalert2";
import Link from "next/link";
import Layout from "../src/components/layouts/Layout";
import logo from "../src/assets/img/progfy.png";
import CustomerPublicRoute from "../src/components/protected/customer/CustomerPublicRoute";

const LoginCustomer = () => {
  const { authenticate, loginCustomer, getUserAuthenticated } = useContext(
    UserAuthContext
  );

  const [customer, setCustomer] = useState({
    email: "",
    password: "",
  });

  const { email, password } = customer;

  const handleChangeCustomer = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginCustomer = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        timer: 3000,
      });

      return;
    }

    loginCustomer(customer);
  };

  return (
    <Layout>
      <CustomerPublicRoute>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <div class="login100-form-title form-bg">
                <img src={logo} alt="Logo Progfy" className="logo-login" />
                <span class="login100-form-title-1">Inicia sesión</span>
              </div>

              <form
                class="login100-form validate-form"
                onSubmit={handleLoginCustomer}
              >
                <div
                  class="wrap-input100 validate-input m-b-25"
                  data-validate="Username is required"
                >
                  <span class="label-input100">Correo:</span>
                  <input
                    class="input100"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChangeCustomer}
                  ></input>
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input m-b-25"
                  data-validate="Password is required"
                >
                  <span class="label-input100">Contraseña:</span>
                  <input
                    class="input100"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangeCustomer}
                  ></input>
                  <span class="focus-input100"></span>
                </div>

                <div class="container-login100-form-btn">
                  <button class="btn-custom login100-form-btn">
                    Iniciar sesión
                  </button>
                </div>
                <div className="p-2 mt-2 text-center">
                  ¿No tienes una cuenta ?{" "}
                  <Link href="/signup">
                    <a className="signup-text">Registrate gratis!</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="page-wrapper bg-gra-03-2 p-t-45">
          <div className="wrapper wrapper--w790">
            <div className="card card-5">
              <div className="card-header bg-white text-center">
                <img src={logo} alt="Logo Progfy" />
              </div>

              <h3 className="p-0 mt-4 text-center">Inicie Sesión</h3>

              <div className="card-body pb-4">
                <form onSubmit={handleLoginCustomer}>
                  <div className="form-row">
                    <div className="name">Correo</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChangeCustomer}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="name">Contraseña</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5"
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChangeCustomer}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <button
                      className="btn btn-inline btn-success col-6 m-auto"
                      type="submit"
                    >
                      INGRESAR
                    </button>
                  </div>
                </form>

                <div className="p-2 mt-2 text-center">
                  No tienes una cuenta ?{" "}
                  <Link href="/signup">
                    <a>REGISTRARME</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </CustomerPublicRoute>
    </Layout>
  );
};

export default LoginCustomer;
