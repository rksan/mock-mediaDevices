import { describe, it } from "mocha";
import { assert } from "chai";

import * as types from "@/types";
import * as factory from "@/factory";

describe("createMediaDevices", () => {
  it("do", () => {
    const devices: types.MediaDevices = factory.createMediaDevices();

    assert.isNotOk(devices === undefined);
  });
});
