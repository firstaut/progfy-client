import React from 'react';
import styled from '@emotion/styled';





const CustomerItem = ({cust, index}) => {

    const created_at = new Date(cust.created).toLocaleString();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{cust.names}</td>
            <td>{cust.lastnames}</td>
            <td>{cust.email}</td>
            <td>{cust.phone}</td>
            <td>{cust.credits}</td>
            <td>{cust.consumed}</td>
            <td>{created_at}</td>
        </tr>
    );
}
 
export default CustomerItem;