import supabase from "../utils/http"


const getApp = {
  getTotalVisits: async (page_url: string): Promise<bigint | null> => {
    const { data, error } = await supabase
      .rpc('get_total_visits', { page_url_input: page_url });

    if (error) {
      console.error('Error fetching total visits:', error);
      return null;
    }
    return data[0]?.total_visits ?? BigInt(0);
  },

  getTotalLikes: async (page_url: string): Promise<bigint | null> => {
    const { data, error } = await supabase
      .rpc('get_total_likes', { page_url_input: page_url });

    if (error) {
      console.error('Error fetching total likes:', error);
      return null;
    }
    return data[0]?.total_likes ?? BigInt(0);
  },

  hasUserLiked: async (userId: string, pageUrl: string): Promise<boolean> => {

    const { data, error } = await supabase
      .rpc('has_user_liked', { user_id_input: userId, page_url_input: pageUrl });
    
    if (error) {
      console.error('Error checking user like status:', error);
      return false;
    }

    return  data;
  },
}


export default getApp;
