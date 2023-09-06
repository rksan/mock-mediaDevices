import { describe, it } from "mocha";
import { assert } from "chai";

import { deepClone } from "@/utils";

describe("deepClone", () => {
  it("not equal object", () => {
    const sample = { test: "value" };

    const clone = deepClone(sample);

    assert.notEqual(sample, clone);
  });
});
