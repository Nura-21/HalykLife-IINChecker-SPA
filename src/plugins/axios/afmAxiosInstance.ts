import axios from "axios";
import interceptors from "./interceptors";
import constants from "@/constants";

/**
 * Instance axios-а для запросов
 * @date 16.09.2022 - 03:14:52
 *
 * @type {*}
 */
const instance = axios.create({
  // baseURL: constants.BASE_URL,
  timeout: constants.TIMEOUT,
});

interceptors(instance);

export default instance;
