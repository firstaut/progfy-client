import React, { Fragment } from 'react';



const CouponItem = ({coupon , index, setCurrentCoupon, setCurrentOption}) => {



    const selectEditCoupon = (xoption, xcoupon) => {
        setCurrentOption(xoption);
        setCurrentCoupon(xcoupon);
    }

    const created_at = new Date(coupon.created_at).toLocaleString();


    return (
        <Fragment>
            <tr>
                <td>{index + 1}</td>
                <td>{coupon.name}</td>
                <td>{coupon.serie}</td>
                <td>{coupon.credits}</td>
                <td>{coupon.countInit}</td>
                <td>{coupon.count}</td>
                <td>{coupon.kind}</td>
                <td>{coupon.status}</td>
                <td>{created_at}</td>
                <td>
                    <button
                        onClick={() => selectEditCoupon('edit', coupon)}
                        type="button"
                        className="btn btn-warning px-4 py-0 m-2"
                    >Editar</button>

                    <button
                        onClick={() => selectEditCoupon('delete', coupon)}
                        type="button"
                        className="btn btn-danger px-4 py-0 m-2"
                    >Eliminar</button>
                </td>
            </tr>
        </Fragment>
    );
}
 
export default CouponItem;