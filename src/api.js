import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_YOU_TUBE_URL,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default request;
