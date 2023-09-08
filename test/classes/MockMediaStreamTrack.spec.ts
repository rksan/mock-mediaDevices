import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";
//import { getUUID } from "@/utils";

describe("MockMediaStreamTrack", () => {
  let track: types.MediaStreamTrack;

  it("create instance", () => {
    track = new classes.MockMediaStreamTrack({ kind: "video" });

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
    it("applyConstraints", async () => {
      track.applyConstraints({});

      assert.isOk(track.kind === "video");
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

      track.addEventListener("ended", handler);
      track.addEventListener("mute", handleObj);
      track.addEventListener("overconstrained", handler);
      track.addEventListener("unmute", handleObj);
    });

    it("dispatchEvent", () => {
      assert.isFunction(track.dispatchEvent);

      track.dispatchEvent(new Event("ended"));
      track.dispatchEvent(new Event("mute"));
      track.dispatchEvent(new Event("overconstrained"));
      track.dispatchEvent(new Event("unmute"));
    });

    it("removeEventListener", () => {
      assert.isFunction(track.removeEventListener);

      track.removeEventListener("ended", handler);
      track.removeEventListener("mute", handleObj);
      track.removeEventListener("overconstrained", handler);
      track.removeEventListener("unmute", handleObj);
    });
  });
});
