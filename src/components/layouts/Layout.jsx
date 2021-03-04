import React, { Fragment, useEffect, useState } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';


const ContentLoading = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;

    p {
        color: white;
        font-size: 14pt;
        font-weight: bold;
        text-align: center;
    }
`;




const Layout = (props) => {

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);


    return (
        <Fragment>
            <Global
                styles={css`
                    * {
                        margin: 0px;
                        padding: 0px;
                        box-sizing: border-box !important;
                    }

                    *::before, *::after {
                        box-sizing: border-box !important;
                    }
                `}
            />

            {/* {
            loading
            ? <ContentLoading>
                <p>Loading...</p>
                <div className="spinner-border text-info"></div>
            </ContentLoading>
            : null
            } */}
            
            {props.children}
        </Fragment>
    );
}
 
export default Layout;