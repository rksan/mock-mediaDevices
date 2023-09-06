import * as types from "@/types";

/**
 * @ref [Instance properties of all media tracks | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#instance_properties_of_all_media_tracks)
 */
export type MediaTrackConstraintsOfAll = {
  deviceId?: string | types.ConstrainDOMString;
  groupId?: string | types.ConstrainDOMString;
};
