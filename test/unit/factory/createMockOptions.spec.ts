import { describe, it } from "mocha";
import { assert } from "chai";

import { createMockOptions } from "@/factory";

describe("createMockOptions", () => {
  it("create object", () => {
    const options = createMockOptions({ video: true, audio: true });

    assert.isObject(options);
  });
});
