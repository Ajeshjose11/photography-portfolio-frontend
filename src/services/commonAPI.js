import axios from "axios";

export const commonAPI = async (method, url, body) => {
  try {
    const response = await axios({
      method,
      url,
      data: body
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
