import { randomString } from "@rksan/random-string";

const issued: string[] = [];

const _uniqueId = (
  counter: number,
  length: number,
  options?: {
    prefix?: string;
    postfix?: string;
  }
) => {
  let len: number = length;
  let prefix: string | undefined = undefined;
  let postfix: string | undefined = undefined;

  if (options) {
    if (options.prefix) {
      prefix = options.prefix;
      len -= prefix.length;
    }
    if (options.postfix) {
      postfix = options.postfix;
      len -= postfix.length;
    }
  }

  if (0 < len) {
    let id = `${prefix || ""}${randomString(len)}${postfix || ""}`;
    if (issued.includes(id)) {
      if (counter < 10) {
        id = _uniqueId(++counter, length, options);
      }
    }
    return id;
  } else {
    return `${prefix || ""}${postfix}`;
  }
};

export const uniqueId = (
  length: number,
  options?: {
    prefix?: string;
    postfix?: string;
  }
) => {
  return _uniqueId(1, length, options);
};
