import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";

describe("MockMediaDevices", () => {
  let devices: types.MediaDevices;

  const videoInputInfo = new classes.MockMediaDeviceInfo({
    kind: "videoinput",
  });
  const audioInputInfo = new classes.MockMediaDeviceInfo({
    kind: "audioinput",
  });
  const audioOutputInfo = new classes.MockMediaDeviceInfo({
    groupId: audioInputInfo.groupId,
    kind: "audiooutput",
  });

  const deviceInfos = [videoInputInfo, audioInputInfo, audioOutputInfo];

  it("create instance", () => {
    devices = new classes.MockMediaDevices(deviceInfos);

    assert.isNotOk(devices === undefined);
  });

  describe("methods", () => {
    it("enumerateDevices", async () => {
      const infos = await devices.enumerateDevices();

      assert.isArray(infos);

      infos.forEach((info) => {
        assert.isNotOk(info === undefined);
      });
    });

    it("getDisplayMedia", async () => {
      const stream = await devices.getDisplayMedia({
        video: true,
        audio: true,
      });

      assert.isNotOk(stream === undefined);
    });

    it("getSupportedConstraints", () => {
      const support = devices.getSupportedConstraints();

      assert.isNotOk(support === undefined);
    });

    it("getUserMedia", async () => {
      const stream = await devices.getUserMedia({ video: true, audio: true });

      assert.isNotOk(stream === undefined);
    });

    it("selectAudioOutput", async () => {
      let deviceInfo;

      deviceInfo = await devices.selectAudioOutput();

      assert.isNotOk(deviceInfo === undefined);

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
