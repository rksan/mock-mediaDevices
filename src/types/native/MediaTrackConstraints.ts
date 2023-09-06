import * as types from "@/types";

/**
 * @ref [ConstrainBoolean | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean)
 */
export type ConstrainBoolean = { exact?: boolean; ideal?: boolean };
/**
 * @ref [ConstrainDouble | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
 */
export type ConstrainDouble = {
  max?: number;
  min?: number;
  exact?: number;
  ideal?: number;
};
/**
 * [ConstrainDOMString | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
 */
export type ConstrainDOMString = { exact?: string; ideal?: string };
/**
 * [ConstrainULong | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
 */
export type ConstrainULong = {
  max?: number;
  min?: number;
  exact?: number;
  ideal?: number;
};

/**
 * Mock of MediaTrackConstraints
 * @ref [MediaTrackConstraints | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints)
 * @export
 */
export type MediaTrackConstraints = types.mock.MediaTrackConstraintsOfAll &
  types.mock.MediaTrackConstraintsOfAudio &
  types.mock.MediaTrackConstraintsOfImage &
  types.mock.MediaTrackConstraintsOfVideo &
  types.mock.MediaTrackConstraintsOfSharedScreen;
