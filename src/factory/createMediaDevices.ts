import * as types from "@/types";
import { MockMediaDevices } from "@/classes";

export const createMediaDevices = (
  devices: types.MediaDeviceInfo[]
): types.MediaDevices => {
  return new MockMediaDevices(devices);
};
