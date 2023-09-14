import { describe, it } from "mocha";
import { assert } from "chai";

import { toJSON } from "@/utils";

describe("toJSON", () => {
  it("return of JSON", () => {
    const json = toJSON({ test: "value" });
    assert.isObject(json);
  });
});
