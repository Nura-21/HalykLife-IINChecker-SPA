/**
 * Интерфейс Организации
 * @date 16.09.2022 - 03:06:27
 *
 * @export
 * @interface Organisation
 * @typedef {Organisation}
 */
export default interface Organisation {
  /**
   * ID
   * @date 16.09.2022 - 03:06:27
   *
   * @type {(string | null)}
   */
  num: string | null;
  /**
   * Название организации
   * @date 16.09.2022 - 03:06:27
   *
   * @type {(string | null)}
   */
  org_name: string | null;
  /**
   * Notes
   * @date 16.09.2022 - 03:06:27
   *
   * @type {(string | null)}
   */
  note: string | null;
}
