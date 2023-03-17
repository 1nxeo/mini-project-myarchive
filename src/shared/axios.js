import axios from "axios";
import { cookies } from "./cookies";

const token = cookies.get("token");

export const apis = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    authorization: `Bearer ${token}`,
  },
});