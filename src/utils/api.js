import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCu2nQ9XNQH06VFsaI-EXzKbIDKPAFF3fw",
  cx: "c51b9d38b8eeb4bbc",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
      params: { ...params, ...payload },
  });
  return data;
};