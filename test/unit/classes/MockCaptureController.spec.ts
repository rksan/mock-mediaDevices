import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";

describe("MockCaptureController", () => {
  let controller: types.CaptureController;

  it("create instance", () => {
    controller = new classes.MockCaptureController();

    assert.isNotOk(controller === undefined);
  });

  describe("methods", () => {
    it("setFocusBehavior", () => {
      assert.isFunction(controller.setFocusBehavior);

      controller.setFocusBehavior("no-focus-change");
    });
  });
});
