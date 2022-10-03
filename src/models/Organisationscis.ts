import Organisation from "@/models/Organisation";

/**
 * Интерфейс Organisationscis
 * @date 16.09.2022 - 03:09:19
 *
 * @export
 * @interface Organisationscis
 * @typedef {Organisationscis}
 * @extends {Organisation}
 */
export default interface Organisationscis extends Organisation {
  /**
   * Название организации на английском языке
   * @date 16.09.2022 - 03:09:19
   *
   * @type {(string | null)}
   */
  org_name_en: string | null;
}
