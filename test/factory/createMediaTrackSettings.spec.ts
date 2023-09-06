import { describe, it } from "mocha";
import { assert } from "chai";

import { createMediaTrackSettings } from "@/factory";

describe("createMediaTrackSettings", () => {
  it("return to object", () => {
    const settings = createMediaTrackSettings({});
    assert.isObject(settings);
  });
});
