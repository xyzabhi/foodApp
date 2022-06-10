import axios from "axios";

export default axios.create({
  baseURL: "https://foodbukka.herokuapp.com/api/v1/",
});
