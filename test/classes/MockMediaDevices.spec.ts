import { describe, it } from "mocha";
import { assert } from "chai";

import { randomString } from "@rksan/random-string";

import type * as types from "@/types";
import { MockMediaDeviceInfo, MockMediaDevices } from "@/classes";

describe("MockMediaDevices", () => {
  let devices: types.MediaDevices;

  const videoGroupId = randomString(32);
  const audioGroupId = randomString(32);

  const deviceInfos = [
    new MockMediaDeviceInfo({
      deviceId: randomString(32),
      groupId: videoGroupId,
      kind: "videoinput",
      label: "mock-video-output-device",
    }),
    new MockMediaDeviceInfo({
      deviceId: randomString(32),
      groupId: audioGroupId,
      kind: "audioinput",
      label: "mock-autio-input-device",
    }),
    new MockMediaDeviceInfo({
      deviceId: randomString(32),
      groupId: audioGroupId,
      kind: "audiooutput",
      label: "mock-audio-output-device",
    }),
  ];

  it("create instance", () => {
    devices = new MockMediaDevices(deviceInfos);

    assert.isObject(devices);
  });

  describe("methods", () => {
    it("enumerateDevices", async () => {
      const infos = await devices.enumerateDevices();

      assert.isArray(infos);

      infos.forEach((info) => {
        assert.isObject(info);
      });
    });

    it("getDisplayMedia", async () => {
      const stream = await devices.getDisplayMedia({
        video: true,
        audio: true,
      });

      assert.isObject(stream);
    });

    it("getSupportedConstraints", () => {
      const support = devices.getSupportedConstraints();

      assert.isObject(support);
    });

    it("getUserMedia", async () => {
      const stream = await devices.getUserMedia({ video: true, audio: true });

      assert.isObject(stream);
    });

    it("selectAudioOutput", async () => {
      let deviceInfo;

      deviceInfo = await devices.selectAudioOutput();

      assert.isObject(deviceInfo);

      deviceInfo = await devices.selectAudioOutput({
        deviceId: "nothing-device",
      });
      assert.isUndefined(deviceInfo);
    });

    const handler: EventListener = (event: Event) => {
      console.log("handler", event);
    };

    const handleObj: EventListenerObject = {
      handleEvent: (event) => console.log("handleObj", event),
    };

    it("dispatchEvent", () => {
      assert.isFunction(devices.dispatchEvent);

      assert.isOk(devices.dispatchEvent(new Event("devicechange")));
      assert.isNotOk(devices.dispatchEvent(new Event("dummy")));
    });

    it("addEventListener", () => {
      assert.isFunction(devices.addEventListener);

      devices.addEventListener("devicechange", handler);
      devices.addEventListener("devicechange", handleObj);

      assert.isOk(devices.dispatchEvent(new Event("devicechange")));
    });

    it("removeEventListener", () => {
      assert.isFunction(devices.removeEventListener);

      devices.removeEventListener("devicechange", handler);
      devices.addEventListener("devicechange", handleObj);

      assert.isOk(devices.dispatchEvent(new Event("devicechange")));
    });
  });
});
