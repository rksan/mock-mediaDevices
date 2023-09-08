import type * as types from "@/types";

export type MediaDeviceArgs = {
  video?: boolean | types.MediaTrackConstraints;
  audio?: boolean | types.MediaTrackConstraints;
  controller?: types.CaptureController;
  preferCurrentTab?: boolean;
  selfBrowserSurface?: "include" | "exclude";
  systemAudio?: "include" | "exclude";
};
