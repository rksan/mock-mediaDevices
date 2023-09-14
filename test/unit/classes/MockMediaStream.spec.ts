import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";
import { getUUID } from "@/utils";

describe("MockMediaStream", () => {
  let stream: types.MediaStream;

  it("create instance", () => {
    stream = new classes.MockMediaStream();

    assert.isNotOk(stream === undefined);
  });

  describe("properties", () => {
    it("active", () => assert.isBoolean(stream.active));

    it("id", () => assert.isString(stream.id));
  });

  describe("methods", () => {
    const ids = {
      videoTrackId: "",
      audioTrackId: "",
    };

    it("addTrack", () => {
      assert.isFunction(stream.addTrack);

      const videoTrack: types.MediaStreamTrack =
        new classes.MockMediaStreamTrack("video");

      ids.videoTrackId = videoTrack.id;

      const audioTrack: types.MediaStreamTrack =
        new classes.MockMediaStreamTrack("audio");

      ids.audioTrackId = audioTrack.id;

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
      const trackId = getUUID();
      const track = new classes.MockMediaStreamTrack("video");

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

    const dummyTrack = new classes.MockMediaStreamTrack("audio");

    it("addEventListener", () => {
      assert.isFunction(stream.addEventListener);

      stream.addEventListener("addtrack", handler);
      stream.addEventListener("removetrack", handleObj);

      assert.isOk(true);
    });

    it("dispatchEvent", () => {
      assert.isFunction(stream.dispatchEvent);

      const addEvent = new classes.MockMediaStreamTrackEvent("addtrack", {
        track: dummyTrack,
      });
      const rmvEvent = new classes.MockMediaStreamTrackEvent("removetrack", {
        track: dummyTrack,
      });

      class DummyEvent extends Event implements types.MediaStreamTrackEvent {
        #track: types.MediaStreamTrack;
        constructor(type: "dummy", options: { track: types.MediaStreamTrack }) {
          super(type);
          this.#track = options.track;
        }
        get track(): types.MediaStreamTrack {
          return this.#track;
        }
      }

      assert.equal(true, stream.dispatchEvent(addEvent));
      assert.equal(true, stream.dispatchEvent(rmvEvent));
      assert.equal(
        false,
        stream.dispatchEvent(new DummyEvent("dummy", { track: dummyTrack }))
      );
    });

    it("removeEventListener", () => {
      assert.isFunction(stream.removeEventListener);

      stream.removeEventListener("addtrack", handler);
      stream.removeEventListener("removetrack", handleObj);

      assert.isOk(true);
    });
  });
});
