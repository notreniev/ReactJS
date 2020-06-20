import axios from "axios";

export default class Api {
  get(url) {
    // buscar o dado
    return axios.get(url);
  }
}
