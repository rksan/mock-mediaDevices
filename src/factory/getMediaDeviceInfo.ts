import * as types from "@/types";
import * as factory from "@/factory";

const DEFAULT_MEDIA_DEVICE_INFOS: types.MediaDeviceInfo[] =
  factory.createMediaDeviceInfo();

export const getMediaDeviceInfo = (): types.MediaDeviceInfo[] => {
  return DEFAULT_MEDIA_DEVICE_INFOS;
};
