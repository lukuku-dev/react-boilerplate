import axios from "axios";
import { BASEURL } from "./api.config";

/**
 *
 * Sample api handler
 */
export const getDummyDataApi = async () => {
  const res = await axios.get(`${BASEURL}`);
  return res;
};
