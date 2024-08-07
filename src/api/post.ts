import axios from "axios";
import { endpoint } from "../utils/http";
import { UserTracker } from "../utils/types";



const postApp = {
    userTracking: async (data: UserTracker) => {
        try {
            const response = await axios.post<UserTracker>(endpoint, data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
}

export default postApp;