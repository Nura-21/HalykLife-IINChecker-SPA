import { AxiosInstance, AxiosResponse } from "axios";
import { xmlToJS } from "@/helpers/parser";

/**
 * Конвертер XML в JS объекты
 * @date 16.09.2022 - 03:15:17
 *
 * @param {AxiosResponse} res
 * @returns {object}
 */
const convertXML = (res: AxiosResponse): object => {
  const parsed = xmlToJS(res.data);
  return { data: parsed };
};

/**
 * Добавляем в интерсепторы конвертер
 * @date 16.09.2022 - 03:15:17
 *
 * @export
 * @param {AxiosInstance} axios
 */
export default function (axios: AxiosInstance): void {
  axios.interceptors.response.use(convertXML);
}
