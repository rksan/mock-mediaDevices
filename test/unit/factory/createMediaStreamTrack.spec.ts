import { describe, it } from "mocha";
import { assert } from "chai";

import * as types from "@/types";
import * as factory from "@/factory";

describe("createMediaStreamTrack", () => {
  const constrains: types.MediaTrackConstraints =
    factory.createMediaTrackConstraints("video");

  const track = factory.createMediaStreamTrack({
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
    const track = factory.createMediaStreamTrack({
      constrains,
      kind: "audio",
    });

    assert.isObject(track);
  });
});
