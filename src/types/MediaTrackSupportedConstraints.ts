export interface MediaTrackSupportedConstraints {
  autoGainControl: boolean;
  width: boolean;
  height: boolean;
  aspectRatio: boolean;
  frameRate: boolean;
  facingMode: boolean;
  resizeMode: boolean;
  volume: boolean;
  sampleRate: boolean;
  sampleSize: boolean;
  echoCancellation: boolean;
  latency: boolean;
  noiseSuppression: boolean;
  channelCount: boolean;
  deviceId: boolean;
  groupId: boolean;

  displaySurface: boolean;
  logicalSurface: boolean;
}
