import { searchClient } from "./axiosClient";

const urls = {
  keyword: "/keyword_search",
  vector: "/vector_text_search",
  textToImage: "/text_to_image",
  imageToImage: "/image_to_image",
};

const searchAPI = {};

searchAPI.query = async (query, type) => {
  const params = new URLSearchParams();
  params.set("query", query);

  let url = `${urls[type]}?${params.toString()}`;

  return await searchClient.get(url);
};

export default searchAPI;
