import PersonList from "./PersonList";
import OrganisationList from "./OrganisationList";
import OrganisationscisList from "./OrganisationscisList";

/**
 * Интерфейс для запроса
 * @date 16.09.2022 - 03:13:47
 *
 * @export
 * @interface Response
 * @typedef {Response}
 */
export default interface Response {
  /**
   * Список пользователей
   * @date 16.09.2022 - 03:13:47
   *
   * @type {PersonList}
   */
  persons: PersonList;
  /**
   * Список организации
   * @date 16.09.2022 - 03:13:47
   *
   * @type {OrganisationList}
   */
  organisations: OrganisationList;
  /**
   * Список организации
   * @date 16.09.2022 - 03:13:47
   *
   * @type {OrganisationscisList}
   */
  organisationscis: OrganisationscisList;
}
