import axios from "axios";
import api from "./api";

export default function callapi(method = "GET", endpoint, item) {
  return axios({
    method: method,
    url: `${api}/${endpoint}`,
    data: item,
  });
}
