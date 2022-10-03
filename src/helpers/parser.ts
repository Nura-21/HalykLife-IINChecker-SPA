import * as Parser from "xml-js";

/**
 * Конвертация XML в JS объект
 * @date 16.09.2022 - 03:05:04
 *
 * @param {string} xml
 * @returns {object}
 */
const xmlToJS = (xml: string): object => {
  return Parser.xml2js(xml, { compact: true });
};

/**
 * Конвертация JS объект в XML
 * @date 16.09.2022 - 03:05:04
 *
 * @param {object} obj
 * @returns {string}
 */
const jsToXML = (obj: object): string => {
  return Parser.js2xml(obj);
};

export { xmlToJS, jsToXML };
