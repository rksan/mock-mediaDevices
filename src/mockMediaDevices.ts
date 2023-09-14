import * as factory from "@/factory";
import * as types from "@/types";

export const mockMediaDevices = (
  deviceInfos?: types.MediaDeviceInfo[]
): types.MediaDevices => {
  return factory.createMediaDevices(deviceInfos);
};
