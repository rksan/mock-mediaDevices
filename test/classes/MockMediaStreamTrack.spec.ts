import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";
import * as factory from "@/factory";

describe("MockMediaStreamTrack", () => {
  let track: types.MediaStreamTrack;

  it("create instance", () => {
    track = new classes.MockMediaStreamTrack("video");

    assert.isNotOk(track === undefined);
  });

  describe("properties", () => {
    it("contentHint", () => {
      //set
      track.contentHint = "text";
      //get
      assert.isString(track.contentHint);
    });
    it("enabled", () => {
      //set
      track.enabled = true;
      //get
      assert.isBoolean(track.enabled);
    });
    it("id", () => {
      assert.isString(track.id);
    });
    it("kind", () => {
      assert.isString(track.kind);
    });
    it("label", () => {
      assert.isString(track.label);
    });
    it("muted", () => {
      assert.isBoolean(track.muted);
    });
    it("readyState", () => {
      assert.isString(track.readyState);
    });
  });

  describe("methods", () => {
    describe("applyConstraints", () => {
      describe("kind of video", () => {
        it("nothing constrain", async () => {
          await track.applyConstraints();

          assert.isOk(track.kind === "video");
        });

        it("boolean constrain", async () => {
          await track.applyConstraints({ video: true });

          assert.isOk(track.kind === "video");
        });

        it("width constrain", async () => {
          await track.applyConstraints({
            video: factory.createMediaTrackConstraints("video"),
          });

          assert.isOk(track.kind === "video");
        });
      });

      describe("kind of audio", () => {
        const audioTrack = new classes.MockMediaStreamTrack("audio");

        it("nothing constrain", async () => {
          await audioTrack.applyConstraints();

          assert.isOk(audioTrack.kind === "audio");
        });

        it("boolean constrain", async () => {
          await audioTrack.applyConstraints({ audio: true });

          assert.isOk(audioTrack.kind === "audio");
        });

        it("width constrain", async () => {
          await audioTrack.applyConstraints({
            audio: factory.createMediaTrackConstraints("audio"),
          });

          assert.isOk(audioTrack.kind === "audio");
        });
      });
    });

    it("clone", () => {
      const clone = track.clone();

      assert.isNotOk(clone === undefined);
    });

    it("getCapabilities", () => {
      const capabilites = track.getCapabilities();

      assert.isNotOk(capabilites === undefined);
    });

    it("getSettings", () => {
      const settings = track.getSettings();

      assert.isNotOk(settings === undefined);
    });

    it("stop", () => {
      track.stop();

      assert.isOk(track.readyState === "ended");
      assert.isOk(track.enabled === false);
    });

    const handler: EventListener = (event: Event) => {
      console.log("handler", event);
    };
    const handleObj: EventListenerObject = {
      handleEvent: (event: Event) => {
        console.log("handleObj", event);
      },
    };

    it("addEventListener", () => {
      assert.isFunction(track.addEventListener);

      track.addEventListener("ended", null);
      track.addEventListener("ended", handler);
      track.addEventListener("mute", handleObj, false);
      track.addEventListener("overconstrained", handler, true);
      track.addEventListener("unmute", handleObj, { capture: false });
    });

    it("dispatchEvent", () => {
      assert.isFunction(track.dispatchEvent);

      assert.equal(true, track.dispatchEvent(new Event("ended")));
      assert.equal(true, track.dispatchEvent(new Event("mute")));
      assert.equal(true, track.dispatchEvent(new Event("overconstrained")));
      assert.equal(true, track.dispatchEvent(new Event("unmute")));
      assert.equal(false, track.dispatchEvent(new Event("dummy")));
    });

    it("removeEventListener", () => {
      assert.isFunction(track.removeEventListener);

      track.removeEventListener("ended", handler);
      track.removeEventListener("mute", handleObj, false);
      track.removeEventListener("overconstrained", handler, true);
      track.removeEventListener("unmute", handleObj, { capture: false });
    });
  });
});
