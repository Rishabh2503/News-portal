import axios from 'axios';

const API_KEY = 'a9d001ecb15c4af2aec95318066c79b9';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      pageSize: 10,
      apiKey: API_KEY,
    },
  });
  console.log(response.data);  // Log the response data
  return response.data;
};
