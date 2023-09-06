import * as types from "@/types";
import { deepClone } from "@/utils";
import { createMediaStreamTrack } from "@/factory";
import { MockMediaStream } from "@/classes/MockMediaStream";

// private functions
const createVideoTrackConstraints = (): types.MediaTrackConstraints => {
  return {
    width: 640,
    height: 480,
    frameRate: 30,
    aspectRatio: 16 / 9,
    echoCancellation: true,
  };
};

const createAudioTrackConstraints = (): types.MediaTrackConstraints => {
  return {};
};

// public functions
export const createMediaStream = (
  devices: types.MediaDeviceInfo[],
  options?: {
    video?: boolean | types.MediaTrackConstraints;
    audio?: boolean | types.MediaTrackConstraints;
  }
): types.MediaStream => {
  const stream = new MockMediaStream();

  if (options) {
    if (options.video) {
      let videoTrackConstrains: types.MediaTrackConstraints;

      if (typeof options.video === "object") {
        videoTrackConstrains = deepClone(options.video);
      } else {
        videoTrackConstrains = createVideoTrackConstraints();
      }

      devices.forEach((device) => {
        if (device.kind === "videoinput") {
          videoTrackConstrains.deviceId = device.deviceId;
          videoTrackConstrains.groupId = device.groupId;
        }
      });

      const videoTrack = createMediaStreamTrack({
        constrains: videoTrackConstrains,
        kind: "video",
      });

      if (videoTrack) {
        stream.addTrack(videoTrack);
      }
    }

    if (options.audio) {
      let audioTrackConstraints: types.MediaTrackConstraints;

      if (typeof options.audio === "object") {
        audioTrackConstraints = options.audio;
      } else {
        audioTrackConstraints = createAudioTrackConstraints();
      }

      devices.forEach((device) => {
        if (device.kind === "audioinput" || device.kind === "audiooutput") {
          audioTrackConstraints.deviceId = device.deviceId;
          audioTrackConstraints.groupId = device.groupId;
        }
      });

      const audioTrack = createMediaStreamTrack({
        constrains: audioTrackConstraints,
        kind: "audio",
      });

      if (audioTrack) {
        stream.addTrack(audioTrack);
      }
    }
  }

  return stream;
};
