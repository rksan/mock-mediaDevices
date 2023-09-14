import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";

describe("MockMediaDeviceInfo", () => {
  let deviceInfo: types.MediaDeviceInfo;

  it("instance", () => {
    deviceInfo = new classes.MockMediaDeviceInfo({
      kind: "videoinput",
    });

    assert.isNotOk(deviceInfo === undefined);
  });

  describe("properties", () => {
    it("deviceId", () => {
      assert.isString(deviceInfo.deviceId);
    });

    it("groupId", () => {
      assert.isString(deviceInfo.groupId);
    });

    it("kind", () => {
      assert.isString(deviceInfo.kind);
    });

    it("label", () => {
      assert.isString(deviceInfo.label);
    });
  });

  describe("methods", () => {
    it("toJSON", () => {
      assert.isFunction(deviceInfo.toJSON);

      const json = deviceInfo.toJSON();

      assert.isObject(json);
    });
  });
});
