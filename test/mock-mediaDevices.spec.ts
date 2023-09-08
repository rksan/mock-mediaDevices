import { describe, it } from "mocha";
import { assert } from "chai";

import { factory, types } from "@/index";

describe("mock-mediaDevices", () => {
  const devices: types.mock.MediaDeviceInfoArgs[] = [
    {
      kind: "videoinput",
    },
    {
      kind: "audioinput",
    },
    {
      kind: "audiooutput",
    },
  ];
  const deviceInfos: types.MediaDeviceInfo[] =
    factory.createMediaDeviceInfo(devices);

  const mediaDevices: types.MediaDevices =
    factory.createMediaDevices(deviceInfos);

  describe("mediaDevices", () => {
    describe("enumerateDevices()", () => {
      it("isArray", async () => {
        const devices: types.MediaDeviceInfo[] =
          await mediaDevices.enumerateDevices();
        assert.isArray(devices);
      });

      it("devices properties", async () => {
        const devices: types.MediaDeviceInfo[] =
          await mediaDevices.enumerateDevices();
        devices.map((info) => {
          assert.isString(info.deviceId);
          assert.isString(info.groupId);
          assert.isString(info.kind);
          assert.isString(info.label);
        });
      });

      it("devices toJSON()", async () => {
        const devices: types.MediaDeviceInfo[] =
          await mediaDevices.enumerateDevices();
        devices.map((info) => {
          const json = info.toJSON();
          assert.isObject(json);
        });
      });
    });

    describe("getDisplayMedia()", () => {
      describe("{video: true}", () => {
        it("instanceOf MediaStream", async () => {
          const stream: types.MediaStream = await mediaDevices.getDisplayMedia({
            video: true,
          });

          assert.isNotOk(stream === undefined);
        });
      });

      describe("{video: constraints}", () => {
        it("instanceOf MediaStream", async () => {
          const stream: types.MediaStream = await mediaDevices.getDisplayMedia({
            video: {
              width: { min: 160, max: 14840, ideal: 1240 },
              aspectRatio: { ideal: 16 / 9 },
            },
          });
          assert.isNotOk(stream === undefined);
        });
      });

      describe("{audio: true}", () => {
        it("instanceOf MediaStream", async () => {
          const stream: types.MediaStream = await mediaDevices.getDisplayMedia({
            audio: true,
          });
          assert.isNotOk(stream === undefined);
        });
      });

      describe("{audio: constraints}", () => {
        it("instanceOf MediaStream", async () => {
          const stream: types.MediaStream = await mediaDevices.getDisplayMedia({
            audio: {
              autoGainControl: true,
            },
          });
          assert.isNotOk(stream === undefined);
        });
      });

      describe("{video:constraints, audio: constraints}", () => {
        it("instanceOf MediaStream", async () => {
          const stream: types.MediaStream = await mediaDevices.getDisplayMedia({
            video: {
              width: {
                ideal: 1280,
              },
              aspectRatio: { ideal: 16 / 9 },
            },
            audio: {
              autoGainControl: true,
            },
          });
          assert.isNotOk(stream === undefined);
        });
      });
    });

    describe("getSupportedConstraints()", () => {
      it("do()", () => {
        const support: types.MediaTrackSupportedConstraints =
          mediaDevices.getSupportedConstraints();

        Object.entries(support).map(([key, value]) => {
          assert.isString(key);
          assert.isBoolean(value);
        });
      });
    });
  });
});
