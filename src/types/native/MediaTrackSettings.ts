//import { MediaTrackConstraints } from "@/types/MediaTrackConstraints";
import {
  VideoFacingModeEnum,
  VideoResizeModeEnum,
  SharedScreenDisplaySurfaceEnum,
} from "@/types/enum";

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
  resizeMode?: VideoResizeModeEnum;

  //# Instance properties of shared screen tracks
  cursor?: "always" | "motion" | "never";
  displaySurface?: SharedScreenDisplaySurfaceEnum;
  logicalSurface?: boolean;
  suppressLocalAudioPlayback?: boolean;
};
