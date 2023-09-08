import type * as types from "@/types";

/**
 * @ref [Instance properties of video tracks | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#instance_properties_of_video_tracks)
 */
export type MediaTrackConstraintsOfVideo = {
  //# Instance properties of video tracks
  aspectRatio?: number | types.ConstrainDouble;
  facingMode?:
    | types.enum.VideoFacingModeEnum
    | (Omit<types.ConstrainDOMString, "ideal" | "exact"> & {
        ideal?: types.enum.VideoFacingModeEnum;
        exact?: types.enum.VideoFacingModeEnum;
      });
  frameRate?: number | types.ConstrainDouble;
  height?: number | types.ConstrainULong;
  width?: number | types.ConstrainULong;
  resizeMode?:
    | types.enum.VideoResizeModeEnum
    | (Omit<types.ConstrainDOMString, "ideal" | "exact"> & {
        ideal?: types.enum.VideoResizeModeEnum;
        exact?: types.enum.VideoResizeModeEnum;
      });
};
