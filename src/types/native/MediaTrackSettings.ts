//import { MediaTrackConstraints } from "@/types/MediaTrackConstraints";
import type * as types from "@/types";

/**
 * Mock of MediaTrackSettings
 * @ref [MediaTrackSettings | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings)
 * @export
 */
//export interface MediaTrackSettings extends MediaTrackConstraints {
export type MediaTrackSettings = {
  deviceId?: string;
  groupId?: string;

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
  facingMode?: VideoFacingModeEnum;
  frameRate?: number;
  height?: number;
  width?: number;
  resizeMode?: types.enum.VideoResizeModeEnum;

  //# Instance properties of shared screen tracks
  cursor?: "always" | "motion" | "never";
  displaySurface?: types.enum.SharedScreenDisplaySurfaceEnum;
  logicalSurface?: boolean;
  suppressLocalAudioPlayback?: boolean;
};
