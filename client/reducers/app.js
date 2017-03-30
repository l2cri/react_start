import createReducer from 'create-redux-reducer';

import {
    LOAD_START,
    LOAD_COMPLITE,
    LOAD_ERROR
} from '../constants/App'


const initialState = {
    model: {},
};

export default createReducer(initialState, {
    [LOAD_START]: (state, payload) => ({
        ...state
    }),
    [LOAD_COMPLITE]: (state, payload) => ({
        ...state,
        model : payload,
    }),
    [LOAD_ERROR]: (state, payload) => ({
        ...state, error: payload
    })
});
