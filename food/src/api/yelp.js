import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MnDKlw8cBLrcKUrTgdSds7nnG3669ASDwl_9_lQ4bLPAPJGZGx6VCCsy5twMGSHvL5MpM6ZvzZowVRLzj43-1A4fJcKulFfltTmqBCCPoBHvMx4DuKvA9CwGoMDsZnYx",
  },
});
