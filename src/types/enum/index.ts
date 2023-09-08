// MediaDeviceInfo
export type MediaDeviceInfoKindEnum =
  | "videoinput"
  | "audioinput"
  | "audiooutput";

export type MediaStreamEventTypeEnum = "addtrack" | "removetrack";

// native

// MediaTrackConstraints
export type VideoFacingModeEnum = "user" | "environment" | "left" | "right";
export type VideoResizeModeEnum = "none" | "crop-and-scale";

export type SharedScreenDisplaySurfaceEnum =
  | "application"
  | "browser"
  | "monitor"
  | "window";
