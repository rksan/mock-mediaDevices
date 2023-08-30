import { CaptureController, MediaTrackConstraints } from "@/types";

export type MediaDeviceOptions = {
  video?: boolean | MediaTrackConstraints;
  audio?: boolean | MediaTrackConstraints;
  controller?: CaptureController;
  preferCurrentTab?: boolean;
  selfBrowserSurface?: "include" | "exclude";
  systemAudio?: "include" | "exclude";
};
