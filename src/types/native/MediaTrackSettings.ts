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
  facingMode?: string;
  frameRate?: number;
  height?: number;
  width?: number;
  resizeMode?: string;

  //# Instance properties of shared screen tracks
  cursor?: string;
  displaySurface?: string;
  logicalSurface?: boolean;
  suppressLocalAudioPlayback?: boolean;
};
