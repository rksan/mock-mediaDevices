/** @type {import("prettier").Options} */
module.exports = {
  /**
   * 折返しをする文字数
   * @see https://prettier.io/docs/en/options.html#print-width
   */
  printWidth: 80,

  /**
   * 末尾のカンマ
   * ※ object のみ、function のみ 等細かい設定はできないみたい
   * <code>
   * ver obj0 = { a: 0, b: 1 };
   * ver obj1 = {
   *   a:0,
   *   b:1, // <- この位置にカンマを入れるか
   * };
   *
   * function (a, b){ ... };
   * function (
   *   a,
   *   b, // <- この位置にカンマを入れるか
   * ){
   *   ...
   * };
   * </code>
   * @see https://prettier.io/docs/en/options.html#trailing-commas
   */
  trailingComma: "none", // ESLint の comma-dangle に任せる

  /**
   * タブ->スペースに変換する際の文字数
   * @see https://prettier.io/docs/en/options.html#tab-width
   */
  tabWidth: 2,

  /**
   * コード行端のセミコロン
   * @see https://prettier.io/docs/en/options.html#semicolons
   */
  semi: true,

  /**
   * 改行コード
   * @see https://prettier.io/docs/en/options.html#end-of-line
   */
  endOfLine: "lf",

  /**
   * 文字列リテラルの引用符
   * @see https://prettier.io/docs/en/options.html#quotes
   */
  singleQuote: false,
};
