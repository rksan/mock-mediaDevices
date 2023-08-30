import { assert } from "chai";
import { utils, mocks } from "@/mock-mediaDevices";

describe("mock-mediaDevices", () => {
  const deviceInfos = utils.createMediaDeviceInfo([
    {
      deviceId: "test-video-device",
      groupId: "test-video-device-group",
      kind: "videoinput",
      label: "test-video-device-label",
    },
  ]);

  const mediaDevices = utils.createMediaDevices(deviceInfos);

  describe("mediaDevices", () => {
    describe("enumerateDevices()", async () => {
      const devices = await mediaDevices.enumerateDevices();

      it("isArray", () => {
        assert.isArray(devices);
      });

      it("devices properties", () => {
        devices.map((info) => {
          assert.isString(info.deviceId);
          assert.isString(info.groupId);
          assert.isString(info.kind);
          assert.isString(info.label);
        });
      });

      it("devices toJSON()", () => {
        devices.map((info) => {
          const json = info.toJSON();
          assert.isObject(json);
        });
      });
    });

    describe("getDisplayMedia()", () => {
      describe("{video: true}", async () => {
        const stream = await mediaDevices.getDisplayMedia({
          video: true,
        });

        it("instanceOf MediaStream", () => {
          assert.instanceOf(stream, mocks.MediaStream);
        });
      });

      describe("{audio: true}", async () => {
        const stream = await mediaDevices.getDisplayMedia({
          audio: true,
        });

        it("instanceOf MediaStream", () => {
          assert.instanceOf(stream, mocks.MediaStream);
        });
      });
    });
  });
});
