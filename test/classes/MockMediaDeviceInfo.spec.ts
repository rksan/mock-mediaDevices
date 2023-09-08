import { describe, it } from "mocha";
import { assert } from "chai";

import { randomString } from "@rksan/random-string";

import type * as types from "@/types";
import { MockMediaDeviceInfo } from "@/classes";

describe("MockMediaDeviceInfo", () => {
  let deviceInfo: types.MediaDeviceInfo;

  it("instance", () => {
    deviceInfo = new MockMediaDeviceInfo({
      deviceId: randomString(32),
      groupId: randomString(32),
      kind: "videoinput",
      label: "mock-media-device",
    });

    assert.isObject(deviceInfo);
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
