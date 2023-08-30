import { MediaDeviceInfo, MediaDevices } from "@/types";

import { createMediaDeviceInfo, createMediaDevices } from "@/utils";

const devices: MediaDeviceInfo[] = createMediaDeviceInfo([
  {
    deviceId: "deviceId-0",
    groupId: "groupId-0",
    kind: "videoinput",
    label: "video-input-mock",
  },
  {
    deviceId: "deviceId-1",
    groupId: "groupId-1",
    kind: "audioinput",
    label: "audio-input-mock",
  },
  {
    deviceId: "deviceId-2",
    groupId: "groupId-2",
    kind: "audiooutput",
    label: "audio-output-mock",
  },
]);

export const mediaDevices: MediaDevices = createMediaDevices(devices);
