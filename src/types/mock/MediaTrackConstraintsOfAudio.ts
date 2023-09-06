import * as types from "@/types";

/**
 * @ref [Instance properties of audio tracks | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#instance_properties_of_audio_tracks)
 */
export type MediaTrackConstraintsOfAudio = {
  //# Instance properties of audio tracks
  autoGainControl?: boolean | types.ConstrainBoolean;
  channelCount?: number | types.ConstrainULong;
  echoCancellation?: boolean | types.ConstrainBoolean;
  latency?: number | types.ConstrainDouble;
  noiseSuppression?: boolean | types.ConstrainBoolean;
  sampleRate?: number | types.ConstrainULong;
  sampleSize?: number | types.ConstrainULong;
  volume?: number | types.ConstrainDouble;
};
