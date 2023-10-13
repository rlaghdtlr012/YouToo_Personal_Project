import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosBaseURL;
