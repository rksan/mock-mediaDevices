import * as types from "@/types";
import { MockMediaDevices } from "@/classes";

export const createMediaDevices = (
  deviceInfos?: types.MediaDeviceInfo[]
): types.MediaDevices => {
  return new MockMediaDevices(deviceInfos);
};
