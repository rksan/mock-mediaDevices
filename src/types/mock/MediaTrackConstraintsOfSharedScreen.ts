import type * as types from "@/types";

/**
 * @ref [Instance properties of shared screen tracks | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks)
 */
export type MediaTrackConstraintsOfSharedScreen = {
  //# Instance properties of shared screen tracks
  displaySurface?:
    | types.mock.enum.SharedScreenDisplaySurfaceEnum
    | (Omit<ConstrainDOMString, "ideal" | "exact"> & {
        ideal?: types.mock.enum.SharedScreenDisplaySurfaceEnum;
        exact?: types.mock.enum.SharedScreenDisplaySurfaceEnum;
      });
  logicalSurface?: boolean | types.ConstrainBoolean;
  suppressLocalAudioPlayback?: boolean | types.ConstrainBoolean;
};
