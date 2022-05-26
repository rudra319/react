import axios from 'axios';

export async function getFeedBackData()
{
    const result = await axios.get("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b");
    return result.data;
    
}