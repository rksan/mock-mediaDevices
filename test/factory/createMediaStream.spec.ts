import { describe, it } from "mocha";
import { assert } from "chai";

import * as factory from "@/factory";

describe("createMediaStream", () => {
  it("args none", () => {
    const stream = factory.createMediaStream();

    assert.isNotOk(stream === undefined);
  });

  it("args video only", () => {
    const stream = factory.createMediaStream({ video: true });

    assert.isNotOk(stream === undefined);
  });

  it("args audio only", () => {
    const stream = factory.createMediaStream({ audio: true });

    assert.isNotOk(stream === undefined);
  });

  it("args audio & video", () => {
    const stream = factory.createMediaStream({ audio: true, video: true });

    assert.isNotOk(stream === undefined);
  });
});
