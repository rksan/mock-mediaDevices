import type * as types from "@/types";
import { toJSON, getUUID } from "@/utils";

export class MockMediaDeviceInfo implements types.MediaDeviceInfo {
  #deviceId: string;
  #groupId: string;
  #kind: types.enum.MediaDeviceInfoKindEnum;
  #label: string;

  constructor(options: types.mock.MediaDeviceInfoArgs) {
    this.#deviceId = options.deviceId || getUUID();
    this.#groupId = options.groupId || getUUID();
    this.#kind = options.kind;
    this.#label = options.label || `mock-${options.kind}-device`;
  }

  get deviceId() {
    return this.#deviceId;
  }

  get groupId() {
    return this.#groupId;
  }

  get kind() {
    return this.#kind;
  }

  get label() {
    return this.#label;
  }

  toJSON(): JSON {
    return toJSON({
      deviceId: this.#deviceId,
      groupId: this.#groupId,
      kind: this.#kind,
      label: this.#label,
    });
  }
}
