import axios from "axios";
import URLS from "../urls";

export const getProductList = async (payload) => {
  // const url = "http://127.0.0.1:8000/extract/data"
  const url = URLS.GET_PRODUCTS_LIST;
  return await axios.post(url, payload).then((response) => response.data);
};
