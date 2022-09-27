import axios from "axios";

const instance = axios.create({
  baseURL: "https://us1.locationiq.com/v1/search.php",
  params: {
    key: process.env.REACT_APP_API_KEY,
    format: "json",
  },
});

export default instance;