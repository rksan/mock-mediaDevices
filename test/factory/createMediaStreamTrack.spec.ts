import { describe, it } from "mocha";
import { assert } from "chai";

import { randomString } from "@rksan/random-string";

import * as types from "@/types";
import {
  createMediaDeviceInfo,
  createMediaStreamTrack,
  createMediaTrackConstraints,
} from "@/factory";

describe("createMediaStreamTrack", () => {
  const devices = createMediaDeviceInfo({
    deviceId: randomString(36),
    groupId: randomString(36),
    kind: "videoinput",
    label: "mock-device",
  });

  const constrains: types.MediaTrackConstraints = createMediaTrackConstraints(
    "video",
    devices
  );

  const track = createMediaStreamTrack({
    constrains,
    kind: "video",
  });

  it("create video track", () => {
    assert.isObject(track);
  });

  describe("properties", () => {
    it("id", () => {
      assert.isString(track.id);
    });

    it("kind", () => {
      assert.equal(track.kind, "video");
    });

    it("label", () => {
      assert.isString(track.label);
    });

    it("enabled", () => {
      assert.isBoolean(track.enabled);
    });

    it("muted", () => {
      assert.isBoolean(track.muted);
    });

    it("readyState", () => {
      assert.equal(track.readyState, "live");
    });
  });

  describe("methids", () => {
    it("applyConstraints", async () => {
      try {
        await track.applyConstraints({ video: true });
        assert.isUndefined(undefined);
      } catch (err) {
        return err;
      }
    });

    it("clone", () => {
      const clone = track.clone();

      assert.isObject(clone);
    });

    it("getCapabilities", () => {
      const capabilities = track.getCapabilities();
      assert.isObject(capabilities);
    });

    it("getSettings", () => {
      const settings = track.getSettings();
      assert.isObject(settings);
    });

    it("stop", () => {
      track.stop();

      assert.equal(track.readyState, "ended");
    });
  });

  it("create audio track", () => {
    const constrains: types.MediaTrackConstraints = {};
    const track = createMediaStreamTrack({
      constrains,
      kind: "audio",
    });

    assert.isObject(track);
  });
});
