import '../styles/globals.css'
import UserAuthService from '../src/contexts/authenticate/UserAuthService';
import ScheduleService from '../src/contexts/schedules/ScheduleService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/main.min.css';
import Head from 'next/head';
import { Fragment } from 'react';
import AdminService from '../src/contexts/admin/AdminService';


function MyApp({ Component, pageProps }) {
  
  return (
    <AdminService>
      <UserAuthService>
        <ScheduleService>
            <Fragment>
            <Head>
              <script src="../../src/assets/js/jquery-3.5.1.min.js"></script>
              <script src="../../src/assets/js/global.js"></script>

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

export default MyApp
