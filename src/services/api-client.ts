import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f177285010234d08b93d541c23374a53"
  }
})