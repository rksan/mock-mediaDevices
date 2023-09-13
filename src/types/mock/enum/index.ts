// MediaDeviceInfo
export type MediaDeviceInfoKindEnum =
  | "videoinput"
  | "audioinput"
  | "audiooutput";

// MediaDevices
export type MediaDeviceEventEnum = "devicechange";

// MediaStreamTrack
export type MediaStreamTrackContentsHintEnum =
  | ""
  | "speech"
  | "speech-recognition"
  | "music"
  | "motion"
  | "detail"
  | "text";
export type MediaStreamTrackKindEnum = "audio" | "video";
export type MediaStreamTrackReadyStateEnum = "live" | "ended";
export type MediaStreamTrackEventTypeEnum =
  | "ended"
  | "mute"
  | "overconstrained"
  | "unmute";

// MediaStream
export type MediaStreamEventTypeEnum = "addtrack" | "removetrack";

// MediaTrackConstraints || MediaTrackSettings
export type SharedScreenDisplaySurfaceEnum =
  | "application"
  | "browser"
  | "monitor"
  | "window";
