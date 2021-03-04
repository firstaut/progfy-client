import React from 'react';
import AdminProtectedRoute from '../../src/components/protected/admin/AdminsProtectedRoute';
import Layout from '../../src/components/layouts/Layout';
import DashboardAdmin from '../../src/components/admin/dashboard/DashboardAdmin';

const IndexAdminPage = () => {
    return (
        <Layout>
            <AdminProtectedRoute path="/">
                <DashboardAdmin />
            </AdminProtectedRoute>
        </Layout>
    );
}
 
export default IndexAdminPage;