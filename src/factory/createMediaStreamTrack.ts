import * as types from "@/types";
import { MockMediaStreamTrack } from "@/classes";

export const createMediaStreamTrack = (options: {
  constrains: types.MediaTrackConstraints;
  kind: "video" | "audio";
  id: string;
}): types.MediaStreamTrack => {
  const track: types.MediaStreamTrack = new MockMediaStreamTrack(options);

  return track;
};
