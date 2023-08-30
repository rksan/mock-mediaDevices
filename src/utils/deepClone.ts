/**
 * 指定された値のディープクローンを生成する
 * @alias structuredClone
 * @ref [structuredClone | MDN](https://developer.mozilla.org/ja/docs/Web/API/structuredClone)
 * @param {any} value 複製するオブジェクト
 * @param {StructuredSerializeOptions} [options] valueの内、複製せずに転送するオブジェクト。
 */
export const deepClone = structuredClone;
