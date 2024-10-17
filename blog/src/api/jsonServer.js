import axios from "axios";

export default axios.create({
  baseURL: "https://1201-2605-59c8-71f3-6810-00-aa7.ngrok-free.app", // This comes from the ngrok server with npm run tunnel
});
