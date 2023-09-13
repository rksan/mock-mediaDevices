import * as types from "@/types";

export const getConstrainDOMStringValue = (
  def: string,
  val?: string | types.ConstrainDOMString
): string => {
  const v = val;

  if (typeof v === "undefined") {
    return def;
  }

  if (typeof v === "string") {
    return v;
  } else if (typeof v.exact === "string") {
    return v.exact;
  } else if (typeof v.ideal === "string") {
    return v.ideal;
  } else {
    return def;
  }
};

export const getConstrainBooleanValue = (
  def: boolean,
  val?: boolean | types.ConstrainBoolean
): boolean => {
  const v = val;

  if (typeof v === "undefined") {
    return def;
  }

  if (typeof v === "boolean") {
    return v;
  } else if (typeof v.exact === "boolean") {
    return v.exact;
  } else if (typeof v.ideal === "boolean") {
    return v.ideal;
  } else {
    return def;
  }
};

export const getConstrainULongValue = (
  def: number,
  val?: number | types.ConstrainULong
): number => {
  const v = val;

  if (typeof v === "undefined") {
    return def;
  }

  if (typeof v === "number") {
    return v;
  } else if (typeof v.exact === "number") {
    return v.exact;
  } else if (typeof v.ideal === "number") {
    return v.ideal;
  } else if (typeof v.max === "number") {
    return v.max;
  } else if (typeof v.min === "number") {
    return v.min;
  } else {
    return def;
  }
};

export const getConstrainDoubleValue = (
  def: number,
  val?: number | types.ConstrainDouble
) => {
  const v = val;

  if (typeof v === "undefined") {
    return def;
  }

  if (typeof v === "number") {
    return v;
  } else if (typeof v.exact === "number") {
    return v.exact;
  } else if (typeof v.ideal === "number") {
    return v.ideal;
  } else if (typeof v.max === "number") {
    return v.max;
  } else if (typeof v.min === "number") {
    return v.min;
  } else {
    return def;
  }
};
