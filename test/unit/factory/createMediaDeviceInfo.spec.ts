import { describe, it } from "mocha";
import { assert } from "chai";

import * as types from "@/types";
import * as factory from "@/factory";
import * as utils from "@/utils";

describe("createMediaDeviceInfo", () => {
  it("once args", () => {
    const info: types.mock.MediaDeviceInfoArgs = {
      deviceId: utils.getUUID(),
      groupId: utils.getUUID(),
      kind: "videoinput",
      label: "mock-videoinput-device",
    };

    const devices: types.MediaDeviceInfo[] =
      factory.createMediaDeviceInfo(info);

    assert.isArray(devices);
    assert.isOk(devices.length === 1);

    devices.forEach((device) => {
      assert.isOk(device.deviceId === info.deviceId);
      assert.isOk(device.groupId === info.groupId);
      assert.isOk(device.kind === info.kind);
      assert.isOk(device.label === info.label);
    });
  });

  it("array args", () => {
    const devices: types.MediaDeviceInfo[] = factory.createMediaDeviceInfo([
      { kind: "videoinput" },
      { kind: "audioinput" },
      { kind: "audiooutput" },
    ]);

    assert.isArray(devices);
    assert.isOk(devices.length === 3);

    devices.forEach((device) => {
      assert.isString(device.deviceId);
      assert.isString(device.groupId);
      assert.isString(device.kind);
      assert.isString(device.label);
    });
  });

  it("none args", () => {
    const devices: types.MediaDeviceInfo[] = factory.createMediaDeviceInfo();

    assert.isArray(devices);
    assert.isOk(devices.length === 3);

    devices.forEach((device) => {
      assert.isString(device.deviceId);
      assert.isString(device.groupId);
      assert.isString(device.kind);
      assert.isString(device.label);
    });
  });
});
