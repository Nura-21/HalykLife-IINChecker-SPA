import { AxiosError } from "axios";

/**
 * Определение Axios ошибки
 * @date 16.09.2022 - 03:05:20
 *
 * @param {*} candidate
 * @returns {candidate is AxiosError}
 */
const isAxiosError = (candidate: any): candidate is AxiosError => {
  return candidate.isAxiosError === true;
};

export default isAxiosError;
