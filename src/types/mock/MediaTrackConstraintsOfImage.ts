import type * as types from "@/types";

/**
 * @ref [Instance properties of image tracks | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#instance_properties_of_image_tracks)
 */
export type MediaTrackConstraintsOfImage = {
  //# Instance properties of image tracks
  whiteBalanceMode?: "none" | "manual" | "single-shot" | "continuous";
  exposureMode?: "none" | "manual" | "single-shot" | "continuous";
  focusMode?: "none" | "manual" | "single-shot" | "continuous";
  pointsOfInterest?: { x: number; y: number };
  exposureCompensation?: number | types.ConstrainDouble;
  colorTemperature?: number | types.ConstrainDouble;
  iso?: number | types.ConstrainDouble;
  brightness?: number | types.ConstrainDouble;
  contrast?: number | types.ConstrainDouble;
  saturation?: number | types.ConstrainDouble;
  sharpness?: number | types.ConstrainDouble;
  focusDistance?: number | types.ConstrainDouble;
  zoom?: number | types.ConstrainDouble;
  torch?: boolean;
};
