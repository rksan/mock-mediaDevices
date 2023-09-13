import * as types from "@/types";
import { MockMediaStreamTrack } from "@/classes";

export const createMediaStreamTrack = (options: {
  kind: "video" | "audio";
  constrains?: types.MediaTrackConstraints;
}): types.MediaStreamTrack => {
  return new MockMediaStreamTrack(options.kind, options.constrains);
};
