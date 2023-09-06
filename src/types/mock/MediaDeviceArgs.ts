import * as types from "@/types";

export type MockMediaDeviceArgs = {
  video?: boolean | types.MediaTrackConstraints;
  audio?: boolean | types.MediaTrackConstraints;
  controller?: types.CaptureController;
  preferCurrentTab?: boolean;
  selfBrowserSurface?: "include" | "exclude";
  systemAudio?: "include" | "exclude";
};
