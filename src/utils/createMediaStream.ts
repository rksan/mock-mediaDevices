import { MediaStreamTrack, MediaTrackConstraints } from "@/types";
import { createMediaStreamTrack } from "@/utils";
import { MediaStream } from "@/mocks/MediaStream.mock";

export const createMediaStream = (options?: {
  video?: boolean | MediaTrackConstraints;
  audio?: boolean | MediaTrackConstraints;
}): MediaStream => {
  const stream = new MediaStream();

  if (options) {
    if (options?.video) {
      const track: MediaStreamTrack = createMediaStreamTrack({
        kind: "video",
      });

      stream.addTrack(track);
    }
  }
  return stream;
};
