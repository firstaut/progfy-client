import React, { useState } from 'react';
import Layout from '../../src/components/layouts/Layout';
import CustomerProtectedRoute from '../../src/components/protected/CustomerProtectedRoute';
import DashboardCustomer from '../../src/components/customers/dashboard/DashboardCustomer';
import CreateSchedule from '../../src/components/customers/dashboard/panels/CreateSchedule';


const CreateSchedulePage = () => {


    return (
        <Layout>
            <CustomerProtectedRoute path="/login">
                <DashboardCustomer component={CreateSchedule} />
            </CustomerProtectedRoute>
        </Layout>
    );
}
 
export default CreateSchedulePage;