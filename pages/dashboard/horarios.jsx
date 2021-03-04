import React, { useState } from 'react';
import Layout from '../../src/components/layouts/Layout';
import CustomerProtectedRoute from '../../src/components/protected/CustomerProtectedRoute';
import DashboardCustomer from '../../src/components/customers/dashboard/DashboardCustomer';
import ListSchedules from '../../src/components/schedules/ListSchedules';


const Prueba = () => {
    return (
        <h1>Esto es una prueba de horarios</h1>
    );
}

const ListSchedulesPage = () => {


    return (
        <Layout>
            <CustomerProtectedRoute path="/login">
                <DashboardCustomer component={ListSchedules} />
            </CustomerProtectedRoute>
        </Layout>
    );
}
 
export default ListSchedulesPage;