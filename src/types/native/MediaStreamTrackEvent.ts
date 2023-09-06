import * as types from "@/types";

export interface MediaStreamTrackEvent extends Event {
  readonly track: types.MediaStreamTrack;
}
