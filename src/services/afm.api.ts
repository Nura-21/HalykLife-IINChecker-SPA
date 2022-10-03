import axios from "@/plugins/axios/afmAxiosInstance";
import { AxiosRequestConfig } from "axios";
import Response from "@/models/Response";
import Organisation from "@/models/Organisation";
import Organisationscis from "@/models/Organisationscis";
import Person from "@/models/Person";

/**
 * Реализация API на https://afmrk.gov.kz/blacklist
 * @date 16.09.2022 - 03:16:26
 *
 * @class AfmApi
 * @typedef {AfmApi}
 */
class AfmApi {
  /**
   * Метод для вызова запроса с передачей конфигурации
   * @date 16.09.2022 - 03:16:26
   *
   * @private
   * @async
   * @template T
   * @param {AxiosRequestConfig} config
   * @returns {Promise<T>}
   */
  private async axiosCall<T>(config: AxiosRequestConfig): Promise<T> {
    const { data } = await axios.request<T>(config);
    return data;
  }

  /**
   * Запрос на ресурс
   * @date 16.09.2022 - 03:16:26
   *
   * @async
   * @returns {Promise<Response>}
   */
  async getObjectFromXml(): Promise<Response> {
    const { xml } = await this.axiosCall({
      method: "get",
      // url: "/blacklist/export/active/xml",
      url: "/data.xml",
    });
    return xml;
  }

  /**
   * Получение пользователей из ресурса
   * @date 16.09.2022 - 03:16:26
   *
   * @async
   * @returns {Promise<PersonList>}
   */
  async getPersons(): Promise<Person[]> {
    const { persons } = await this.getObjectFromXml();
    return persons.person;
  }

  /**
   * Получение организации из ресурса
   * @date 16.09.2022 - 03:16:26
   *
   * @async
   * @returns {Promise<Organisation>}
   */
  async getOrganisations(): Promise<Organisation[]> {
    const { organisations } = await this.getObjectFromXml();
    return organisations.org;
  }

  /**
   * Получение организации из ресурса
   * @date 16.09.2022 - 03:16:26
   *
   * @async
   * @returns {Promise<Organisationscis>}
   */
  async getOrganisationscis(): Promise<Organisationscis[]> {
    const { organisationscis } = await this.getObjectFromXml();
    return organisationscis.org;
  }
}

const afmApi = new AfmApi();
export default afmApi;
