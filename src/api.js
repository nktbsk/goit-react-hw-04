import axios from "axios";

const ACCESS_KEY = "tiMMCYYTmgvcAIKgv6TxUXtwKw0rm05ydEpPZ846qow";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchImages = async (query, page = 1) => {
  const response = await instance.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return response.data;
};
