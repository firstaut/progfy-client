import CustomerTypes from '../../types/CustomerTypes';

const {
    LGN_CUST,
    SGP_CUST,
    OUT_CUST,
    SSN_CUST,
    GET_CREDITS_CONSUMED,
    DECREMENT_CREDITS
} = CustomerTypes;

export default function UserAuthReducer(state, action) {

    switch(action.type) {
        case SGP_CUST:
            return {
                
            };
        case LGN_CUST:
            return {
                ...state,
                authenticate: true,
                customer: action.payload
            };
        case OUT_CUST:
            return {
                ...state,
                authenticate: false,
                customer: null
            };

        case SSN_CUST:
            return {
                ...state,
                authenticate: true,
                customer: action.payload
            };
        case GET_CREDITS_CONSUMED:
            return {
                ...state,
                credits: action.payload.credits,
                consumed: action.payload.consumed,
            };
        case DECREMENT_CREDITS:
            return {
                ...state,
                credits: state.credits - action.payload
            };

        default:
            return state;
    }
}