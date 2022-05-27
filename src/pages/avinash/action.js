import axios from 'axios';

export const ACTION_GET_FEEDBACK_LOADING = "avinash/GET_FEEDBACK_LOADING";
export const ACTION_GET_FEEDBACK_SUCCESS = "avinash/GET_FEEDBACK_SUCCESS";
export const ACTION_GET_FEEDBACK_ERROR = "avinash/GET_FEEDBACK_ERROR";

export async function getFeedBackData(dispatch)
{
    try{
    dispatch({type:ACTION_GET_FEEDBACK_LOADING})
    const result = await axios.get("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b");
    const {data :{distRes = []} = {}} = result;
    console.log("distResp:::",distRes)
    if(distRes && distRes.length > 0){
        dispatch({type:ACTION_GET_FEEDBACK_SUCCESS, distRes: distRes});
    }else{
        dispatch({type:ACTION_GET_FEEDBACK_ERROR, feedbackMsg: "Something Went Wrong"})
    }
    } catch (e){
        console.error("Catch:::::",e);
        dispatch({type:ACTION_GET_FEEDBACK_ERROR, feedbackMsg: e.message})
    }
    
}