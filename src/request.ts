import axios from "axios";

import { apiUrl } from "./settings";

let authAxios = axios.create({
  baseURL: apiUrl
});
class Request {
  getWeather(data: any) {
    return new Promise((next, error) => {
      authAxios
        .get("/api", { params: { ...data } })
        .then((d: any) => {
          next(d.data);
        })
        .catch((err: any) => {
          next({ error: true, err });
          error(err);
        });
    });
  }
}

export default new Request();
