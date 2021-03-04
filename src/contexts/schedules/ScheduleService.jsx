import React, { useReducer } from 'react';
import SchedulesTypes from '../../types/SchedulesTypes';
import ScheduleContext from './ScheduleContext';
import ScheduleReducer from './ScheduleReducer';
import serviceAxios from '../../config/serviceAxios';
import tokenAuth from '../../config/TokenAuth';

const {
    ADD_SCHEDULE,
    GET_SCHEDULE,
    LST_SCHEDULE,
    LST_HOURS

} = SchedulesTypes;

const ScheduleService = (props) => {


    const initialState = {
        schedule: null,
        schedules: [],
        hours: {
            early: [],
            morning: [],
            afternoon: [],
            night: []
        }
    }

    const [ state, dispatch ] = useReducer(ScheduleReducer, initialState);

    const addSchedule = async (schedule) => {
        try {

            const response = await serviceAxios.post('/schedule/add', schedule);

            if(response.status === 200) {
                dispatch({
                    type: ADD_SCHEDULE,
                    payload: response.data.schedule
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getScheduleById = async (scheduleId) => {

        try {
            
            const response = await serviceAxios.get('/schedule/get', scheduleId);

            console.log(response);

            if(response.status === 200) {
                dispatch({
                    type: GET_SCHEDULE,
                    payload: response.data.schedule
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const lstSchedulesByCustomer = async () => {

        const token = localStorage.getItem("x-token-auth");

        try {

            if (token) {
                tokenAuth(token);
            }
            
            const response = await serviceAxios.get('/schedule/lst');

            console.log(response);

            if(response.status === 200) {
                dispatch({
                    type: LST_SCHEDULE,
                    payload: response.data.schedules
                });
            }

        } catch (error) {
            console.log(error);   
        }
    }

    const lstHoursByDay = async (dateDay) => {
        try {

            const token = localStorage.getItem("x-token-auth");

            if(token) {
                tokenAuth(token);
            }

            console.log(dateDay);
            const response = await serviceAxios.post('/schedule/get-by-day', {dateDay: dateDay});
            console.log(response);

            if(response.status === 200) {
                dispatch({
                    type: LST_HOURS,
                    payload: response.data.hours
                });
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ScheduleContext.Provider
            value={{
                schedule: state.schedule,
                schedules: state.schedules,
                hours: state.hours,
                addSchedule,
                getScheduleById,
                lstSchedulesByCustomer,
                lstHoursByDay
            }}
        >
            {props.children}
        </ScheduleContext.Provider>
    );
}
 
export default ScheduleService;