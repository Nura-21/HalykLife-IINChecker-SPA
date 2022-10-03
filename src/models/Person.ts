/**
 * Интерфейс пользователей
 * @date 16.09.2022 - 03:12:19
 *
 * @export
 * @interface Person
 * @typedef {Person}
 */
export default interface Person {
  /**
   * ID
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  num: string;
  /**
   * Фамилия
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  lname: string;
  /**
   * Имя
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  fname: string;
  /**
   * Отчество
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  mname: string;
  /**
   * Дата рождения
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  birthdate: string;
  /**
   * ИИН
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  iin: string;
  /**
   * Notes
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  note?: string;
  /**
   * Коррекции
   * @date 16.09.2022 - 03:12:19
   *
   * @type {string}
   */
  correction?: string;
}
