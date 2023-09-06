import * as types from "@/types";
import { toJSON } from "@/utils";

const randomValue = (length: number) => {
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
};

export class MockMediaDeviceInfo implements types.MediaDeviceInfo {
  #deviceId: string;
  #groupId: string;
  #kind: types.enum.MediaDeviceInfoKindEnum;
  #label: string;

  constructor(options: types.mock.MediaDeviceInfoArgs) {
    this.#deviceId = options.deviceId ?? randomValue(32);
    this.#groupId = options.groupId;
    this.#kind = options.kind;
    this.#label = options.label;
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
    return toJSON(this);
  }
}
