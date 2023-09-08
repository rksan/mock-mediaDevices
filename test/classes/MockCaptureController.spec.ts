import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import { MockCaptureController } from "@/classes";

describe("MockCaptureController", () => {
  let controller: types.CaptureController;

  it("create instance", () => {
    controller = new MockCaptureController();

    assert.isObject(controller);
  });

  describe("methods", () => {
    it("setFocusBehavior", () => {
      assert.isFunction(controller.setFocusBehavior);

      controller.setFocusBehavior("no-focus-change");
    });
  });
});
