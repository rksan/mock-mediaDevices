import { MediaDeviceInfo } from "@/types";
import { deepClone, toJSON } from "@/utils";

type MockMediaDeviceInfo = {
  deviceId: string;
  groupId: string;
  kind: "" | "videoinput" | "audioinput" | "audiooutput";
  label: string;
};

export const createMediaDeviceInfo = (
  info: MockMediaDeviceInfo | MockMediaDeviceInfo[]
): MediaDeviceInfo[] => {
  if (Array.isArray(info)) {
    const devices: MediaDeviceInfo[] = [];
    for (const value of info) {
      devices.concat(createMediaDeviceInfo(value));
    }
    return devices;
  } else {
    const devices = [createInfo(info)];
    return devices;
  }
};

const createInfo = (info: MockMediaDeviceInfo): MediaDeviceInfo => {
  const clone = deepClone(info);

  const deviceInfo: MediaDeviceInfo = {
    ...clone,
    toJSON() {
      return toJSON(clone);
    },
  };

  return deviceInfo;
};
