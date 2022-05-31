
import {
    ACTION_GET_FEEDBACK_LOADING, 
    ACTION_GET_FEEDBACK_SUCCESS, 
    ACTION_GET_FEEDBACK_ERROR
} from './action';

export const initialState = {"tesing":"Yo"}

export default (state=initialState, action) => {
    switch(action.type){
        case ACTION_GET_FEEDBACK_LOADING: {
            return {
               ...state,
               feedbackLoading: true,
               feedbackData: [],
               feedbackError: false,
               feedbackMsg: ""
            }
        }
        case ACTION_GET_FEEDBACK_SUCCESS: {
            const {distRes = []} = action;
            return {
               ...state,
               feedbackLoading: false,
               feedbackData: distRes,
               feedbackError: false,
               feedbackMsg: ""
            }
        }
        case ACTION_GET_FEEDBACK_ERROR: {
            const {feedbackMsg = ""} = action;
            return {
               ...state,
               feedbackLoading: false,
               feedbackData: [],
               feedbackError: true,
               feedbackMsg
            }
        }
        case "MY_FORM_SUBMIT": {
            const {myFormData = ""} = action;
            console.log("myFormData:::",myFormData)
            return {
               ...state,
               myFormData
            }
        }
    }
}