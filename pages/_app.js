import "../styles/globals.css";
import UserAuthService from "../src/contexts/authenticate/UserAuthService";
import ScheduleService from "../src/contexts/schedules/ScheduleService";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/main.css";
import Head from "next/head";
import { Fragment } from "react";
import AdminService from "../src/contexts/admin/AdminService";

function MyApp({ Component, pageProps }) {
  return (
    <AdminService>
      <UserAuthService>
        <ScheduleService>
          <Fragment>
            <Head>
              <script src="../../src/assets/js/jquery-3.5.1.min.js"></script>
              <script src="../../src/assets/js/global.js"></script>
              <title>Progfy</title>
              <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossorigin="anonymous"
              />

              <style>
                {/* html {
                  scroll-behavior: smooth !important;
                } */}
              </style>
            </Head>
            <Component {...pageProps} />
          </Fragment>
        </ScheduleService>
      </UserAuthService>
    </AdminService>
  );
}

export default MyApp;
