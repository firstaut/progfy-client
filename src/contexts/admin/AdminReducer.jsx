import AdminTypes from '../../types/AdminTypes';

const {

    LST_CUSTOMER,
    LST_COUPONS,
    GET_MACHINE,
    ADD_COUPONS,


} = AdminTypes;

export default function AdminReducer(state, action) {

    switch(action.type) {
        
        case LST_CUSTOMER:
            return {
                ...state,
                customers: action.payload
            };
        case GET_MACHINE:
            return {
                ...state,
                machine: action.payload
            };
        case LST_COUPONS:
            return {
                ...state,
                coupons: action.payload
            };
        case ADD_COUPONS:
            return {
                ...state,
                coupons: [...state.coupons, action.payload]
            };

        default:
            return state;
    }
}
