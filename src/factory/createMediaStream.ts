import * as types from "@/types";
import * as utils from "@/utils";
import * as factory from "@/factory";
import * as classes from "@/classes";

// public functions
export const createMediaStream = (options?: {
  video?: boolean | types.MediaTrackConstraints;
  audio?: boolean | types.MediaTrackConstraints;
}): types.MediaStream => {
  const stream = new classes.MockMediaStream();

  if (options) {
    if (options.video) {
      const kind = "video";

      let track;

      if (typeof options.video === "object") {
        track = factory.createMediaStreamTrack({
          kind,
          constrains: utils.deepClone(options.video),
        });
      } else if (options.video === true) {
        track = factory.createMediaStreamTrack({ kind });
      }

      if (track) {
        stream.addTrack(track);
      }
    }

    if (options.audio) {
      const kind = "audio";

      let track;

      if (typeof options.audio === "object") {
        track = factory.createMediaStreamTrack({
          kind,
          constrains: utils.deepClone(options.audio),
        });
      } else if (options.audio === true) {
        track = factory.createMediaStreamTrack({ kind });
      }

      if (track) {
        stream.addTrack(track);
      }
    }
  }

  return stream;
};
