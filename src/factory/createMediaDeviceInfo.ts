import * as types from "@/types";
import { MockMediaDeviceInfo } from "@/classes";

const createInfo = (
  info: types.mock.MediaDeviceInfoArgs
): types.MediaDeviceInfo => {
  return new MockMediaDeviceInfo(info);
};

export const createMediaDeviceInfo = (
  infos?: types.mock.MediaDeviceInfoArgs | types.mock.MediaDeviceInfoArgs[]
): types.MediaDeviceInfo[] => {
  if (infos) {
    if (Array.isArray(infos)) {
      const deviceInfos: types.MediaDeviceInfo[] = [];

      infos.forEach((info) => {
        deviceInfos.push(createInfo(info));
      });

      return deviceInfos;
    } else {
      return [createInfo(infos)];
    }
  } else {
    const defaultInfo: types.mock.MediaDeviceInfoArgs[] = [
      { kind: "videoinput" },
      { kind: "audioinput" },
      { kind: "audiooutput" },
    ];

    return createMediaDeviceInfo(defaultInfo);
  }
};
