import { describe, it } from "mocha";
import { assert } from "chai";

import * as types from "@/types";
import * as factory from "@/factory";
import { getUUID } from "@/utils";
import {
  getConstrainBooleanValue,
  getConstrainDOMStringValue,
  getConstrainDoubleValue,
  getConstrainULongValue,
} from "@/factory/createMediaTrackSettings/utils";
import { createEntriesForAll } from "@/factory/createMediaTrackSettings/entry";

describe("createMediaTrackSettings", () => {
  describe("./utils", () => {
    it("getConstrainBooleanValue", () => {
      assert.isOk(getConstrainBooleanValue(true));
      assert.isOk(getConstrainBooleanValue(true, {}));
      assert.isOk(getConstrainBooleanValue(false, { exact: true }));
      assert.isOk(getConstrainBooleanValue(false, { ideal: true }));
    });

    it("getConstrainDOMStringValue", () => {
      assert.equal("def", getConstrainDOMStringValue("def"));
      assert.equal("def", getConstrainDOMStringValue("def", {}));
      assert.equal("def", getConstrainDOMStringValue("", { exact: "def" }));
      assert.equal("def", getConstrainDOMStringValue("", { ideal: "def" }));
    });

    it("getConstrainDoubleValue", () => {
      assert.equal(1.1, getConstrainDoubleValue(1.1));
      assert.equal(1.1, getConstrainDoubleValue(1.1, {}));
      assert.equal(1.1, getConstrainDoubleValue(0, { exact: 1.1 }));
      assert.equal(1.1, getConstrainDoubleValue(0, { ideal: 1.1 }));
      assert.equal(1.1, getConstrainDoubleValue(0, { max: 1.1 }));
      assert.equal(1.1, getConstrainDoubleValue(0, { min: 1.1 }));
    });

    it("getConstrainULongValue", () => {
      assert.equal(1, getConstrainULongValue(1));
      assert.equal(1, getConstrainULongValue(1, {}));
      assert.equal(1, getConstrainULongValue(0, { exact: 1 }));
      assert.equal(1, getConstrainULongValue(0, { ideal: 1 }));
      assert.equal(1, getConstrainULongValue(0, { max: 1 }));
      assert.equal(1, getConstrainULongValue(0, { min: 1 }));
    });
  });

  describe("./entry", () => {
    describe("createEntriesForAll", () => {
      it("case true", () => {
        const deviceId = getUUID(),
          groupId = getUUID();
        let infos, entries;

        infos = factory.createMediaDeviceInfo({
          deviceId,
          groupId,
          kind: "videoinput",
        });
        entries = createEntriesForAll("video", infos);

        entries.forEach((entry) => {
          const keys = entry.keys;
          keys.forEach((key) => {
            if (key.name === "deviceId") {
              const id = entry.value("", undefined);
              assert.equal(deviceId, id);
            } else if (key.name === "groupId") {
              const id = entry.value("", undefined);
              assert.equal(groupId, id);
            }
          });
        });

        infos = factory.createMediaDeviceInfo({
          deviceId,
          groupId,
          kind: "audioinput",
        });
        entries = createEntriesForAll("audio", infos);

        entries.forEach((entry) => {
          const keys = entry.keys;
          keys.forEach((key) => {
            if (key.name === "deviceId") {
              const id = entry.value("", undefined);
              assert.equal(deviceId, id);
            } else if (key.name === "groupId") {
              const id = entry.value("", undefined);
              assert.equal(groupId, id);
            }
          });
        });
      });

      it("case false", () => {
        const deviceId = getUUID(),
          groupId = getUUID();
        let infos, entries;

        infos = factory.createMediaDeviceInfo({
          deviceId,
          groupId,
          kind: "videoinput",
        });
        entries = createEntriesForAll("audio", infos);

        entries.forEach((entry) => {
          const keys = entry.keys;
          keys.forEach((key) => {
            if (key.name === "deviceId") {
              const id = entry.value("", undefined);
              assert.notEqual(deviceId, id);
            } else if (key.name === "groupId") {
              const id = entry.value("", undefined);
              assert.notEqual(groupId, id);
            }
          });
        });

        infos = factory.createMediaDeviceInfo({
          deviceId,
          groupId,
          kind: "audioinput",
        });
        entries = createEntriesForAll("video", infos);

        entries.forEach((entry) => {
          const keys = entry.keys;
          keys.forEach((key) => {
            if (key.name === "deviceId") {
              const id = entry.value("", undefined);
              assert.notEqual(deviceId, id);
            } else if (key.name === "groupId") {
              const id = entry.value("", undefined);
              assert.notEqual(groupId, id);
            }
          });
        });
      });
    });
  });

  it("kind video", () => {
    const kind = "video";
    const constraints = factory.createMediaTrackConstraints(kind);

    const settings: types.MediaTrackSettings = factory.createMediaTrackSettings(
      kind,
      constraints
    );

    assert.isObject(settings);
  });
  it("with constraints", () => {
    const kind = "audio";
    const constraints = factory.createMediaTrackConstraints(kind, {
      deviceId: getUUID(),
      groupId: getUUID(),
    });

    const settings: types.MediaTrackSettings = factory.createMediaTrackSettings(
      kind,
      constraints
    );

    assert.isObject(settings);
  });
});
