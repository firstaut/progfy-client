import PackageTypes from '../../types/PackageTypes';

const {
    LST_PACK
} = PackageTypes;

export default function PackageReducer(state, action) {
    switch(action.type) {
        case LST_PACK:
            return {
                ...state,
                packages: action.payload
            };

        default:
            return state;
    }
};


