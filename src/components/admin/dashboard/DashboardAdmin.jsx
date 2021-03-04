import React, { Fragment, useState } from 'react';
import DashboardOptionsAdmin from './DashboardOptionsAdmin';
import styled from '@emotion/styled';
import DashboardHeaderAdmin from './DashboardHeaderAdmin';
import { useContext, useEffect } from 'react';
import UserAuthContext from '../../../contexts/authenticate/UserAuthContext';
import ListCustomers from '../customers/ListCustomers';
import ConfigurationAdmin from '../configurations/ConfigurationsAdmin';
import ListCoupons from '../coupons/ListCoupons';


const ContentDashboard = styled.div`
    height: 100vh;

    .content_options > div {
        height: 100vh;
    }

    .element_option {
        height: 87.5vh;
    }
`;


const DashboardAdmin = () => {

    const { customer, getUserAuthenticated } = useContext(UserAuthContext);

    const [ selected, setSelected ] = useState(0);


    useEffect(() => {
        getUserAuthenticated();
    }, []);

    if(!customer || customer.kind.trim() !== 'admin') {
        history.push('/');
    }


    return (
        <ContentDashboard>
            <DashboardHeaderAdmin />

            <div className="row p-0 m-0">
                <div className="col-2 bg-dark pt-4 element_option">
                    <DashboardOptionsAdmin selected={selected} setSelected={setSelected} />
                </div>

                <div className="col-10 element_option">
                    {
                    selected === 0 || selected === 1
                    ? <ConfigurationAdmin />
                    : selected === 2
                    ? <ListCustomers />
                    : <ListCoupons />
                    }
                </div>
            </div>
        </ContentDashboard>
    );
}
 
export default DashboardAdmin;