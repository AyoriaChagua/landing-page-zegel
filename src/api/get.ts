import axios from "axios";
import { endpoint } from "../utils/http"
import { UserTracker } from "../utils/types";

const getApp = {
    userTracking: async () => {
        try {
            const response = await axios.get<UserTracker[]>(endpoint);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default getApp;
