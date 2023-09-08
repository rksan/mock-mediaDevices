import type * as types from "@/types";

export type MediaDeviceInfoArgs = {
  deviceId?: string;
  groupId?: string;
  kind: types.enum.MediaDeviceInfoKindEnum;
  label?: string;
};
