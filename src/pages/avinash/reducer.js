
import {
    ACTION_GET_FEEDBACK_LOADING, 
    ACTION_GET_FEEDBACK_SUCCESS, 
    ACTION_GET_FEEDBACK_ERROR
} from './action';

export const initialState = {}

export default (state=initialState, action) => {
    switch(action.type){
        case ACTION_GET_FEEDBACK_LOADING: {
            return {
               ...state,
               feedbackLoading: true,
               feedbackData: [],
               feedbackError: false
            }
        }
        case ACTION_GET_FEEDBACK_SUCCESS: {
            const {distRes = []} = action;
            return {
               ...state,
               feedbackLoading: false,
               feedbackData: distRes,
               feedbackError: false
            }
        }
        case ACTION_GET_FEEDBACK_ERROR: {
            return {
               ...state,
               feedbackLoading: false,
               feedbackData: [],
               feedbackError: true
            }
        }
    }
}