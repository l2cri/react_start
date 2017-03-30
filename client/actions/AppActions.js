import {
    LOAD_START,
    LOAD_ERROR,
    LOAD_COMPLITE
} from '../constants/App'
import api from '../api'
import axios from 'axios'
import * as helper from '../utils'


const AppActions = {
    startApp() {

        return (dispatch) => {
            dispatch({
                type: LOAD_START,
                payload: {}
            });

            AppActions.getList(dispatch);

        }
    },
    // common
    getList(dispatch) {
        api.getListModel().then(({data}) => {
                dispatch({
                    type: LOAD_COMPLITE,
                    payload: data.model
                });
            }
        ).catch((error) => {
                dispatch({
                    type: LOAD_ERROR,
                    payload: error
                });
            }
        )
    },

}

export default AppActions
