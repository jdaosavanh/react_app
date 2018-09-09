import axios from 'axios';
import {GET_CUSTOMERS,SAVE_CUSTOMER,DELETE_CUSTOMER,ITEMS_LOADING} from './constants';

export const getCustomers = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/customers')
        .then(res =>
            dispatch({
                type:GET_CUSTOMERS,
                //data that comes in from the back end which is from /routes/api/customer.js
                payload: res.data
            })

        );
};

export const saveCustomer = (item) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .post('/api/customers', item)
        .then(res =>
            dispatch({
                type:SAVE_CUSTOMER,
                //data that comes in from the back end which is from /routes/api/customer.js
                payload: res.data
            })

        );
};

export const deleteCustomer = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .delete('/api/customers', id)
        .then(res =>
            dispatch({
                type:DELETE_CUSTOMER,
                //data that comes in from the back end which is from /routes/api/customer.js
                payload: res.data
            })

        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};
