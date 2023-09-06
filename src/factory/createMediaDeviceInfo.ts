import * as types from "@/types";
import { MockMediaDeviceInfo } from "@/classes";

const createInfo = (
  info: types.mock.MediaDeviceInfoArgs
): types.MediaDeviceInfo => {
  return new MockMediaDeviceInfo(info);
};

export const createMediaDeviceInfo = (
  info: types.mock.MediaDeviceInfoArgs | types.mock.MediaDeviceInfoArgs[]
): types.MediaDeviceInfo[] => {
  if (Array.isArray(info)) {
    const devices: types.MediaDeviceInfo[] = [];
    for (const value of info) {
      devices.concat(createMediaDeviceInfo(value));
    }
    return devices;
  } else {
    const devices = [createInfo(info)];
    return devices;
  }
};
