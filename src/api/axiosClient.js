import axios from "axios";

const searchClient = axios.create({
  baseURL: "http://localhost:8000",
});

export { searchClient };
