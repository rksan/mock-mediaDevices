import { describe, it } from "mocha";
import { assert } from "chai";

import type * as types from "@/types";
import * as classes from "@/classes";

describe("MockMediaStreamTrackEvent", () => {
  let event: types.MediaStreamTrackEvent;

  it("create instance", () => {
    const stream = new classes.MockMediaStream();
    const track = new classes.MockMediaStreamTrack({ kind: "video" });

    stream.addTrack(track);

    event = new classes.MockMediaStreamTrackEvent("addtrack", { track });

    assert.isOk(event === undefined);
  });

  describe("properties", () => {
    it("track", () => {
      const track = event.track;

      assert.isNotOk(track === undefined);
    });
  });
});
