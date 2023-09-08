import { describe, it } from "mocha";
import { assert } from "chai";

import { randomString } from "@rksan/random-string";

import type * as types from "@/types";
import * as classes from "@/classes";

describe("MockMediaStream", () => {
  let stream: types.MediaStream;

  it("create instance", () => {
    stream = new classes.MockMediaStream({ id: randomString(36) });

    assert.isObject(stream);
  });

  describe("properties", () => {
    it("active", () => assert.isBoolean(stream.active));

    it("id", () => assert.isString(stream.id));
  });

  describe("methods", () => {
    const ids = {
      videoTrackId: "vvv-" + randomString(32),
      audioTrackId: "aaa-" + randomString(32),
    };

    it("addTrack", () => {
      assert.isFunction(stream.addTrack);

      const videoTrack: types.MediaStreamTrack =
        new classes.MockMediaStreamTrack({
          constrains: {},
          kind: "video",
          id: ids.videoTrackId,
        });

      const audioTrack: types.MediaStreamTrack =
        new classes.MockMediaStreamTrack({
          constrains: {},
          kind: "audio",
          id: ids.audioTrackId,
        });

      stream.addTrack(videoTrack);
      stream.addTrack(audioTrack);

      assert.isOk(stream.active);
    });

    it("clone", () => {
      const clone = stream.clone();

      assert.isObject(clone);
    });

    it("getAudioTracks", () => {
      const audioTracks = stream.getAudioTracks();

      assert.isArray(audioTracks);
      assert.isOk(audioTracks.length === 1);
      assert.isOk(audioTracks[0].kind === "audio");
    });

    it("getTrackById", () => {
      const track = stream.getTrackById(ids.videoTrackId);

      assert.isObject(track);
      assert.isOk(track?.id === ids.videoTrackId);
    });

    it("getTracks", () => {
      const tracks = stream.getTracks();

      assert.isArray(tracks);
      assert.isOk(tracks.length === 2);
    });

    it("getVideoTracks", () => {
      const videoTracks = stream.getVideoTracks();

      assert.isArray(videoTracks);
      assert.isOk(videoTracks.length === 1);
      assert.isOk(videoTracks[0].kind === "video");
    });

    it("removeTrack", () => {
      const trackId = "ddd-" + randomString(32);
      const track = new classes.MockMediaStreamTrack({
        constrains: {},
        kind: "video",
        id: trackId,
      });

      stream.addTrack(track);
      stream.removeTrack(track);

      assert.isOk(stream.getTrackById(trackId) === undefined);
    });

    const handler: types.mock.MediaStreamEventListener = (
      event: types.MediaStreamTrackEvent
    ) => {
      console.log("handler", event);
    };

    const handleObj: types.mock.MediaStreamEventListenerObject = {
      handleEvent: (event: types.MediaStreamTrackEvent) =>
        console.log("handleObj", event),
    };

    const dummyTrack = new classes.MockMediaStreamTrack({
      constrains: {},
      kind: "video",
      id: "ddd-" + randomString(32),
    });

    it("addEventListener", () => {
      assert.isFunction(stream.addEventListener);

      stream.addEventListener("addtrack", handler);
      stream.addEventListener("removetrack", handleObj);

      assert.isOk(true);
    });

    it("dispatchEvent", () => {
      assert.isFunction(stream.dispatchEvent);

      const addEvent = new classes.MockMediaStreamTrackEvent(
        "addtrack",
        stream,
        dummyTrack
      );
      const rmvEvent = new classes.MockMediaStreamTrackEvent(
        "removetrack",
        stream,
        dummyTrack
      );

      stream.dispatchEvent(addEvent);
      stream.dispatchEvent(rmvEvent);
    });

    it("removeEventListener", () => {
      assert.isFunction(stream.removeEventListener);

      stream.removeEventListener("addtrack", handler);
      stream.removeEventListener("removetrack", handleObj);

      assert.isOk(true);
    });
  });
});
