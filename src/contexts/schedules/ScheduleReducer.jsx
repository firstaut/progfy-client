import SchedulesTypes from '../../types/SchedulesTypes';

const {

    ADD_SCHEDULE,
    GET_SCHEDULE,
    LST_SCHEDULE,
    LST_HOURS

} = SchedulesTypes;


export default function ScheduleReducer(state, action) {

    switch(action.type) {

        case ADD_SCHEDULE:
            return {
                ...state,
                schedules: [...state.schedules, action.payload]
            };
        case LST_SCHEDULE:
            return {
                ...state,
                schedules: action.payload
            };
        case GET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload
            };
        case LST_HOURS:
            return {
                ...state,
                hours: action.payload
            };

        default:
            return state;
    }

}