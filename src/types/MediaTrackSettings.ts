import { MediaTrackConstraints } from "@/types/MediaTrackConstraints";

export interface MediaTrackSettings extends MediaTrackConstraints {
  deviceId: string;
  groupId: string;

  //# Instance properties of audio tracks
  autoGainControl?: boolean;
  channelCount?: number;
  echoCancellation?: boolean;
  latency?: number;
  noiseSuppression?: boolean;
  sampleRate?: number;
  sampleSize?: number;
  volume?: number;

  //# Instance properties of video tracks
  aspectRatio?: number;
  facingMode?: "user" | "environment" | "left" | "right";
  frameRate?: number;
  height?: number;
  width?: number;
  resizeMode?: "none" | "crop-and-scale";

  //# Instance properties of shared screen tracks
  cursor?: "always" | "motion" | "never";
  displaySurface?: "application" | "browser" | "monitor" | "window";
  logicalSurface?: boolean;
  suppressLocalAudioPlayback?: boolean;
}
