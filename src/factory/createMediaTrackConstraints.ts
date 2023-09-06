import * as types from "@/types";

type MediaTrackConstraintsKindEnum = "video" | "audio";

export const createMediaTrackConstraints = (
  kind: MediaTrackConstraintsKindEnum,
  devices: types.MediaDeviceInfo[],
  options?: types.MediaTrackConstraints
) => {
  const all = createMediaTrackConstraintsOfAll(devices, kind, options || {});
  switch (kind) {
    case "video": {
      const video = createMediaTrackConstraintsOfVideo(options || {});

      return { ...all, ...video };
    }
    case "audio":
      return { ...all };
  }
};

const createMediaTrackConstraintsOfAll = (
  devices: types.MediaDeviceInfo[],
  kind: MediaTrackConstraintsKindEnum,
  options: types.MediaTrackConstraints
): types.mock.MediaTrackConstraintsOfAll => {
  if (options.deviceId) {
    return {
      deviceId: options.deviceId,
      groupId: options.groupId,
    };
  } else {
    const all: types.mock.MediaTrackConstraintsOfAll = {
      deviceId: "",
      groupId: "",
    };

    devices.forEach((device) => {
      if (kind === "video") {
        if (device.kind === "videoinput") {
          all.deviceId = device.deviceId;
          all.groupId = device.groupId;
        }
      } else {
        if (device.kind === "audioinput" || device.kind === "audiooutput") {
          all.deviceId = device.deviceId;
          all.groupId = device.groupId;
        }
      }
    });

    return all;
  }
};

const createMediaTrackConstraintsOfVideo = (
  opt: types.MediaTrackConstraints
): types.mock.MediaTrackConstraintsOfVideo => {
  return {
    ...{
      aspectRatio: 16 / 9,
      facingMode: "environment",
      frameRate: 30,
      //height: 320,
      width: 640,
      //resizeMode: "crop-and-scale",
    },
    ...(<types.mock.MediaTrackConstraintsOfVideo>opt),
  };
};
