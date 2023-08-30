export type ConstrainBoolean = boolean | { exact?: boolean; ideal?: boolean };
export type ConstrainDouble =
  | number
  | { max?: number; min?: number; exact?: number; ideal?: number };
export type ConstrainDOMString = string | { exact?: string; ideal?: string };
export type ConstrainULong =
  | number
  | { max?: number; min?: number; exact?: number; ideal?: number };

export interface MediaTrackConstraints {
  devideId?: string | ConstrainDOMString;
  groupId?: string | ConstrainDOMString;

  //# Instance properties of audio tracks
  autoGainControl?: boolean | ConstrainBoolean;
  channelCount?: number | ConstrainULong;
  echoCancellation?: boolean | ConstrainBoolean;
  latency?: number | ConstrainDouble;
  noiseSuppression?: boolean | ConstrainBoolean;
  sampleRate?: number | ConstrainULong;
  sampleSize?: number | ConstrainULong;
  volume?: number | ConstrainDouble;

  //# Instance properties of image tracks
  whiteBalanceMode?: "none" | "manual" | "single-shot" | "continuous";
  exposureMode?: "none" | "manual" | "single-shot" | "continuous";
  focusMode?: "none" | "manual" | "single-shot" | "continuous";
  pointsOfInterest?: { x: number; y: number };
  exposureCompensation?: number | ConstrainDouble;
  colorTemperature?: number | ConstrainDouble;
  iso?: number | ConstrainDouble;
  brightness?: number | ConstrainDouble;
  contrast?: number | ConstrainDouble;
  saturation?: number | ConstrainDouble;
  sharpness?: number | ConstrainDouble;
  focusDistance?: number | ConstrainDouble;
  zoom?: number | ConstrainDouble;
  torch?: boolean;

  //# Instance properties of video tracks
  aspectRatio?: number | ConstrainDouble;
  facingMode?: string | ConstrainDOMString;
  frameRate?: number | ConstrainDouble;
  height?: number | ConstrainULong;
  width?: number | ConstrainULong;
  resizeMode?: string | ConstrainDOMString;

  //# Instance properties of shared screen tracks
  displaySurface?: string | ConstrainDOMString;
  logicalSurface?: boolean | ConstrainBoolean;
  suppressLocalAudioPlayback?: boolean | ConstrainBoolean;
}
